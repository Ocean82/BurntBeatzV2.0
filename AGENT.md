# BurntBeatzV2.0 Agent Guide

## Build & Commands
- **Build**: `pnpm run build` (Next.js with TypeScript)
- **Dev**: `pnpm run dev` (development server)
- **Lint**: `pnpm run lint` (ESLint via Next.js)
- **Docker**: `docker-compose up` (multi-service deployment)

## Architecture
- **Frontend**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
- **Backend**: Python services (audio/MIDI processing, voice cloning, RVC)
- **API Routes**: `/api/*` directories (auth, audio, GitHub, Stripe, webhooks)
- **Databases**: Multiple DB support (Postgres, SQLite, MySQL via Drizzle/Prisma)
- **Payment**: Stripe integration for credits/subscriptions
- **External**: GitHub API integration, voice cloning services

## Code Style
- **TypeScript**: Strict mode enabled, ES6 target
- **Imports**: `@/*` alias for root imports, React types explicit (`type React.FC`)
- **Components**: Functional components with `forwardRef` pattern
- **UI**: Radix UI + CVA variants + shadcn/ui components in `/components/ui`
- **Styling**: Tailwind CSS with custom design tokens, HSL color variables
- **Forms**: React Hook Form + Zod validation
- **State**: TanStack Query for server state, React hooks for local state
- **Naming**: camelCase for variables/functions, PascalCase for components/types
