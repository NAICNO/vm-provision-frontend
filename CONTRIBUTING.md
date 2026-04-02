# Contributing to NAIC Orchestrator

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork and create a branch from `master`
3. Set up the development environment (see [README.md](README.md))
4. Make your changes
5. Submit a pull request

## Development Guidelines

### Code Style

- **TypeScript** — all new code must be written in TypeScript
- **Chakra UI v3** — use style props exclusively, no CSS files or CSS modules
- **Functional components** — no class components
- **TanStack Query** — wrap all API calls in custom hooks, never call APIs directly from components
- **Formik + Yup** — use the existing `FormField` component for form fields

### Project Structure

- `src/v2/` — Waldur-based features (organizations, projects, marketplace)
- `src/components/` — Legacy (V1) shared components
- `src/client/` — Auto-generated Waldur SDK (do not edit manually)

**Import rules:**
- `src/v2/` may import from `src/`
- `src/` must NOT import from `src/v2/`
- All new Waldur features go in `src/v2/`

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in imperative mood (e.g., "Add", "Fix", "Update")

## Pull Requests

- Keep PRs focused on a single change
- Include a description of what changed and why
- Ensure `yarn lint` and `yarn test` pass before submitting
- Link any related issues

## Reporting Issues

- Use GitHub Issues to report bugs or request features
- Include steps to reproduce for bug reports
- Include expected vs actual behavior

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
