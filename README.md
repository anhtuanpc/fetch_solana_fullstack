# Solana Monorepo

A modern monorepo setup with pnpm workspaces, featuring NestJS backend and Next.js frontend for Solana blockchain applications.

## 📁 Structure

```
solana_monorepo/
├── apps/
│   ├── backend/          # NestJS application (port 3001)
│   └── frontend/         # Next.js application (port 3000)
├── packages/             # Shared packages (future use)
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── package.json          # Root package.json
```

## 🔧 Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 📦 Installation

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm

# Install all dependencies
pnpm install
```

## 🚀 Development

### Run both apps in parallel

```bash
pnpm dev
```

### Run individual apps

```bash
# Backend only (NestJS - port 3001)
pnpm backend:dev

# Frontend only (Next.js - port 3000)
pnpm frontend:dev
```

## 🧪 Testing

### Backend Tests

```bash
# Run unit tests
pnpm backend:test

# Run e2e tests
pnpm backend:test:e2e

# Or use the shorthand for e2e
pnpm test:e2e
```

## 🏗️ Build

```bash
# Build all apps
pnpm build
```

## 📱 Applications

### Backend (NestJS)

- **Port:** 3001
- **Location:** `apps/backend`
- **Endpoints:**
  - `GET /` - Hello message
  - `GET /api/health` - Health check
- **Testing:** Jest with e2e tests in `test/` folder

### Frontend (Next.js)

- **Port:** 3000
- **Location:** `apps/frontend`
- **Features:**
  - Server-side rendering
  - Connects to backend API
  - Modern React 19 with App Router
  - Tailwind CSS v4 for styling

## 📝 Adding New Packages

To add a package to a specific workspace:

```bash
# Add to backend
pnpm --filter backend add <package-name>

# Add to frontend
pnpm --filter frontend add <package-name>

# Add to root (dev dependencies)
pnpm add -D -w <package-name>
```

## 🛠️ Technologies

### Core

- **Monorepo:** pnpm workspaces
- **Package Manager:** pnpm

### Backend

- **Framework:** NestJS 10.3
- **Runtime:** Node.js with TypeScript 5.3
- **Server:** Express
- **Testing:** Jest, Supertest
- **Code Quality:** ESLint, Prettier

### Frontend

- **Framework:** Next.js 16.0
- **UI Library:** React 19.2
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Code Quality:** ESLint

## 📋 Available Scripts

| Command                 | Description                               |
| ----------------------- | ----------------------------------------- |
| `pnpm dev`              | Run both backend and frontend in parallel |
| `pnpm build`            | Build all applications                    |
| `pnpm backend:dev`      | Start backend in development mode         |
| `pnpm backend:test`     | Run backend unit tests                    |
| `pnpm backend:test:e2e` | Run backend e2e tests                     |
| `pnpm frontend:dev`     | Start frontend in development mode        |
| `pnpm test:e2e`         | Run e2e tests                             |

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Run tests to ensure everything works
4. Push to the branch and create a Pull Request

## 📄 License

This project is private and proprietary.
