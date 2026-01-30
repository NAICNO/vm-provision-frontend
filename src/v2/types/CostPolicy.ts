/**
 * Cost Policy Types for Waldur Integration
 * 
 * These types complement the auto-generated Waldur API types from src/client/types.gen.ts
 * by providing UI-specific types and constants for cost policy management.
 * 
 * Core Waldur types used:
 * - CustomerEstimatedCostPolicy (organization-level spending limits)
 * - ProjectEstimatedCostPolicy (project-level spending limits)
 * - OfferingEstimatedCostPolicy (per-offering limits)
 * - NestedPriceEstimate (current spending tracking - values are strings in API!)
 * - PeriodEnum (1=monthly, 2=annual, 3=total, 4=quarterly)
 */

import type { PeriodEnum } from '../../client/types.gen'

/**
 * Period display names for cost policies
 * Maps PeriodEnum values to human-readable labels
 */
export const PERIOD_NAMES: Record<PeriodEnum, string> = {
  1: 'Monthly',
  2: 'Annual',
  3: 'Total',
  4: 'Quarterly',
}

/**
 * Spending status levels for UI display
 * - normal: Under 80% of limit
 * - warning: 80-90% of limit
 * - critical: 90-100% of limit
 * - blocked: Limit exceeded, BLOCK_CREATION action fired
 */
export type SpendingStatus = 'normal' | 'warning' | 'critical' | 'blocked'

/**
 * Calculated spending progress for UI display
 */
export interface SpendingProgress {
  /** Current spending amount */
  current: number
  /** Maximum spending limit */
  limit: number
  /** Percentage of limit consumed (0-100+) */
  percentage: number
  /** Status level based on thresholds */
  status: SpendingStatus
  /** Amount remaining before limit */
  remaining: number
}

/**
 * Thresholds for determining spending status
 * Values are percentages (0-100)
 */
export const SPENDING_THRESHOLDS = {
  WARNING: 80, // Show warning at 80%
  CRITICAL: 90, // Show critical alert at 90%
  BLOCKED: 100, // Blocked when limit exceeded
}

/**
 * Available cost policy actions
 * These are comma-separated in the Waldur API actions field
 */
export enum CostPolicyAction {
  NOTIFY_ORGANIZATION_OWNERS = 'notify_organization_owners',
  NOTIFY_PROJECT_TEAM = 'notify_project_team',
  NOTIFY_EXTERNAL_USER = 'notify_external_user',
  BLOCK_CREATION = 'BLOCK_CREATION',
}

/**
 * Parsed cost policy actions for UI
 */
export interface ParsedPolicyActions {
  notifyOrgOwners: boolean
  notifyProjectTeam: boolean
  notifyExternalUser: boolean
  blockCreation: boolean
}

/**
 * Form values for creating/editing cost policies
 */
export interface CostPolicyFormValues {
  limitCost: number
  period: PeriodEnum // 1=monthly, 2=annual, 3=total, 4=quarterly
  notifyOrgOwners: boolean
  notifyProjectTeam: boolean
  notifyExternalUser: boolean
  blockCreation: boolean
}
