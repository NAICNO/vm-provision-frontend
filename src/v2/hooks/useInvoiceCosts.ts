import { useQuery } from '@tanstack/react-query'
import {
  invoiceItemsProjectCostsForPeriodRetrieve,
  invoiceItemsCustomerCostsForPeriodRetrieve,
  invoiceItemsTotalPriceRetrieve,
  invoiceItemsCostsList,
} from '../../client/sdk.gen'
import type {
  InvoiceItemsProjectCostsForPeriodRetrieveData,
  InvoiceItemsCustomerCostsForPeriodRetrieveData,
  InvoiceItemsTotalPriceRetrieveData,
  InvoiceItemsCostsListData,
} from '../../client/types.gen'
import QueryKeys from '../../constants/QueryKeys'

/**
 * Hook to fetch actual costs for a project over a specific period.
 * @param projectUuid - UUID of the project
 * @param period - Period in months (1, 3, or 12)
 * @param enabled - Whether the query should run
 * @returns Query result with CostsForPeriod data (total_price, start_date, end_date)
 */
export function useProjectCostsForPeriod(
  projectUuid?: string,
  period?: number,
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_PROJECT_COSTS, projectUuid, period],
    queryFn: async () => {
      const params: InvoiceItemsProjectCostsForPeriodRetrieveData = {
        url: '/api/invoice-items/project_costs_for_period/',
        query: {
          project_uuid: projectUuid,
          period,
        },
      }
      const response = await invoiceItemsProjectCostsForPeriodRetrieve(params)
      return response.data
    },
    enabled: enabled && !!projectUuid,
  })
}

/**
 * Hook to fetch actual costs for a customer/organization over a specific period.
 * @param customerUuid - UUID of the customer/organization
 * @param period - Period in months (1, 3, or 12)
 * @param enabled - Whether the query should run
 * @returns Query result with CostsForPeriod data (total_price, start_date, end_date)
 */
export function useCustomerCostsForPeriod(
  customerUuid?: string,
  period?: number,
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_CUSTOMER_COSTS, customerUuid, period],
    queryFn: async () => {
      const params: InvoiceItemsCustomerCostsForPeriodRetrieveData = {
        url: '/api/invoice-items/customer_costs_for_period/',
        query: {
          customer_uuid: customerUuid,
          period,
        },
      }
      const response = await invoiceItemsCustomerCostsForPeriodRetrieve(params)
      return response.data
    },
    enabled: enabled && !!customerUuid,
  })
}

/**
 * Hook to fetch total price with flexible filtering options.
 * Useful for getting historical cost data or filtered totals.
 * @param filters - Filtering options (customer, project, resource, offering, year, month, etc.)
 * @param enabled - Whether the query should run
 * @returns Query result with InvoiceItemTotalPrice data (total_price)
 */
export function useTotalPrice(
  filters?: InvoiceItemsTotalPriceRetrieveData['query'],
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_TOTAL_PRICE, filters],
    queryFn: async () => {
      const params: InvoiceItemsTotalPriceRetrieveData = {
        url: '/api/invoice-items/total_price/',
        query: filters,
      }
      const response = await invoiceItemsTotalPriceRetrieve(params)
      return response.data
    },
    enabled,
  })
}

/**
 * Hook to fetch monthly cost breakdown for a project.
 * Returns array of costs broken down by month (useful for charts/graphs).
 * @param projectUuid - UUID of the project
 * @param pageSize - Number of results per page
 * @param enabled - Whether the query should run
 * @returns Query result with array of InvoiceCost data (price, year, month)
 */
export function useInvoiceItemsCosts(
  projectUuid?: string,
  pageSize = 12,
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_INVOICE_ITEMS_COSTS, projectUuid, pageSize],
    queryFn: async () => {
      const params: InvoiceItemsCostsListData = {
        url: '/api/invoice-items/costs/',
        query: {
          project_uuid: projectUuid,
          page_size: pageSize,
        },
      }
      const response = await invoiceItemsCostsList(params)
      return response.data
    },
    enabled: enabled && !!projectUuid,
  })
}

/**
 * Hook to get current month's project costs (convenience wrapper).
 * @param projectUuid - UUID of the project
 * @param enabled - Whether the query should run
 * @returns Query result with current month's total cost
 */
export function useCurrentMonthProjectCosts(
  projectUuid?: string,
  enabled = true
) {
  return useProjectCostsForPeriod(projectUuid, 1, enabled)
}

/**
 * Hook to get current month's customer costs (convenience wrapper).
 * @param customerUuid - UUID of the customer/organization
 * @param enabled - Whether the query should run
 * @returns Query result with current month's total cost
 */
export function useCurrentMonthCustomerCosts(
  customerUuid?: string,
  enabled = true
) {
  return useCustomerCostsForPeriod(customerUuid, 1, enabled)
}

export interface ProjectCostEntry {
  uuid: string
  name: string
  totalPrice: number
}

/**
 * Hook to fetch invoice costs for all projects in an organization.
 * Fetches the project list, then costs for each project in parallel.
 * @param customerUuid - UUID of the customer/organization
 * @param period - Period in months (1 or 3)
 * @param enabled - Whether the query should run
 * @returns Array of { uuid, name, totalPrice } for each project with non-zero spending
 */
export function useOrgProjectCosts(
  customerUuid?: string,
  period = 3,
  enabled = true
) {
  return useQuery({
    queryKey: [QueryKeys.W_ORG_PROJECT_COSTS, customerUuid, period],
    queryFn: async (): Promise<ProjectCostEntry[]> => {
      const { projectsList } = await import('../../client/sdk.gen')
      const projectsResp = await projectsList({
        query: { customer: [customerUuid!] },
      })
      const projects = projectsResp.data || []

      const costResults = await Promise.all(
        projects.map(async (project) => {
          try {
            const params: InvoiceItemsProjectCostsForPeriodRetrieveData = {
              url: '/api/invoice-items/project_costs_for_period/',
              query: { project_uuid: project.uuid, period },
            }
            const resp = await invoiceItemsProjectCostsForPeriodRetrieve(params)
            return {
              uuid: project.uuid!,
              name: project.name!,
              totalPrice: Number(resp.data?.total_price ?? 0),
            }
          } catch {
            return { uuid: project.uuid!, name: project.name!, totalPrice: 0 }
          }
        })
      )

      return costResults
        .filter((p) => p.totalPrice > 0)
        .sort((a, b) => b.totalPrice - a.totalPrice)
    },
    enabled: enabled && !!customerUuid,
    staleTime: 60000,
  })
}
