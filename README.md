# Solana Monorepo

A modern monorepo setup with pnpm workspaces, featuring NestJS backend and Next.js frontend.

## Structure

```
solana_monorepo/
├── apps/
│   ├── backend/          # NestJS application (port 3001)
│   └── frontend/         # Next.js application (port 3000)
├── packages/             # Shared packages (future use)
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── package.json          # Root package.json
```

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Installation

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm

# Install all dependencies
pnpm install
```

## Development

### Run both apps in parallel

```bash
pnpm dev
```

### Run individual apps

```bash
# Backend only (NestJS)
pnpm backend:dev

# Frontend only (Next.js)
pnpm frontend:dev
```

## Build

```bash
# Build all apps
pnpm build
```

## Applications

### Backend (NestJS)

- **Port:** 3001
- **Location:** `apps/backend`
- **Endpoints:**
  - `GET /` - Hello message
  - `GET /api/health` - Health check

### Frontend (Next.js)

- **Port:** 3000
- **Location:** `apps/frontend`
- **Features:**
  - Server-side rendering
  - Connects to backend API
  - Modern React with App Router

## Adding New Packages

To add a package to a specific workspace:

```bash
# Add to backend
pnpm --filter backend add <package-name>

# Add to frontend
pnpm --filter frontend add <package-name>

# Add to root (dev dependencies)
pnpm add -D -w <package-name>
```

## Technologies

- **Monorepo:** pnpm workspaces
- **Backend:** NestJS, TypeScript, Express
- **Frontend:** Next.js 14, React 18, TypeScript
- **Package Manager:** pnpm
