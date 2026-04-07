# NAIC Orchestrator - Frontend

[![DOI](https://zenodo.org/badge/706219018.svg)](https://doi.org/10.5281/zenodo.19454587)

> Self-service web portal for the Norwegian AI Cloud (NAIC) — a unified interface for provisioning and managing compute resources across institutional and commercial cloud providers.

## Overview

The NAIC Orchestrator is the frontend for Norway's federated hybrid cloud platform. It enables researchers to provision VMs, manage budgets, and govern resources across OpenStack-based institutional clouds (NREC) and commercial hyperscalers through a single interface.

### Key Capabilities

- **Federated Infrastructure Access** — single entry point to manage resources across private institutional OpenStack instances and commercial cloud providers
- **Self-Service VM Provisioning** — multi-step wizard for tenant creation, VM configuration (image, flavor, volume, network, security groups, SSH keys), and lifecycle management (start/stop/restart/delete)
- **Financial Stewardship** — organization and project-level cost policies, real-time budget tracking, and automated spending alerts with progressive thresholds
- **Role-Based Governance** — multi-tier permission model (Organization Owner → Project Admin → Project Member) with route-level access guards
- **Software Environment Parity** — EESSI stack via CVMFS installed at provisioning, ensuring identical environments across all providers
- **Marketplace Service Catalog** — browse and order from curated, vetted infrastructure offerings

## Architecture

The application communicates with two independent backends:

| Backend | Scope | Auth |
|---------|-------|------|
| **Waldur** | Organizations, projects, marketplace orders, cost policies, invoices, permissions, OpenStack provisioning | Keycloak token |
| **Legacy (Terraform)** | Multi-cloud provisioning (Google Cloud, IBM, Azure, Nscale), VM lifecycle, WebSocket events | Cookie-based |

## Tech Stack

React 19 · TypeScript · Vite · Chakra UI v3 · TanStack Query · React Router v7 · Formik + Yup · AG Grid (Community) · Keycloak

## Getting Started

### Prerequisites

- Node.js (v18+)
- Yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NAICNO/vm-provision-frontend.git
   cd vm-provision-frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.development
   ```
   Edit `.env.development` with your backend URLs and OAuth client ID.

4. Start the dev server:
   ```bash
   yarn dev
   ```
   The app runs at `http://localhost:8080`.

### Available Scripts

| Command | Purpose |
|---------|---------|
| `yarn dev` | Dev server (port 8080) |
| `yarn build:prod` | Production build |
| `yarn lint` | ESLint |
| `yarn test` | Vitest |
| `yarn openapi-ts` | Regenerate Waldur API client |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Acknowledgments

Part of the [Norwegian AI Cloud (NAIC)](https://www.naic.no) project.
