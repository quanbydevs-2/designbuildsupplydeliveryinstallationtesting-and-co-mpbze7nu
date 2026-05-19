# AGENTS.md — Tubod Municipality Agriculture Information System

## Overview
Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte, designed to track farmers, crops, livestock, and agricultural programs. Fully compliant with RA 9184 Government Procurement Reform Act, RA 10173 Data Privacy Act, and National Privacy Commission guidelines for secure data handling and citizen privacy protection.

## Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 16 + Tailwind v4 + shadcn/ui
- **Backend**: NestJS 11 + Drizzle ORM
- **Auth**: Better Auth
- **Contracts**: oRPC + Zod
- **DB**: PostgreSQL 17

## Modules
- **Farmers** (`farmer`): First Name, Last Name, Barangay, Farm Area (hectares), Contact Number, Registration Date, Farm Type, Active Status
- **Crops** (`crop`): Crop Name, Variety, Farmer ID, Planting Date, Expected Harvest, Area Planted (ha), Estimated Yield (tons)
- **Livestock** (`livestock`): Animal Type, Breed, Farmer ID, Quantity, Acquisition Date, Purpose, Health Status
- **Programs** (`program`): Program Name, Description, Start Date, End Date, Budget, Target Beneficiaries, Status
- **Data Privacy** (`dataprivacy`): Request Type, Data Subject, Request Details, Consent Status, Filed Date, Resolved Date, Processing Status, Breach Severity

## Commands
- `pnpm dev` — Start all apps
- `pnpm build` — Build everything
- `pnpm db:push` — Push DB schema
- `pnpm db:seed` — Seed data
- `pnpm test` — Run tests
- `pnpm lint` — Lint all

## Structure
```
├── apps/web/         # Next.js frontend
├── apps/backend/     # NestJS API
├── packages/db/      # Drizzle ORM
├── packages/auth/    # Better Auth
├── packages/contracts/ # oRPC + Zod
└── tooling/          # Shared configs
```

Always use `pnpm` (never npm/yarn).