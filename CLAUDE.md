# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check with TypeScript, then build for production
- `npm run lint` — Run ESLint (flat config)
- `npm run preview` — Preview the production build locally

No test runner is configured.

## Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **React Router 7** for client-side routing (`/`, `/host`, `/team`)
- **Tailwind CSS 4** — custom theme defined in `src/index.css` via `@theme` directive
- **Supabase** (PostgreSQL + realtime) — client in `src/lib/supabase.ts`, credentials via `VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env`

## Architecture

### Game flow
- **HomePage** (`src/pages/HomePage.tsx`) — logo, role-select buttons (Host / Team)
- **HostPage** (`src/pages/HostPage.tsx`) — displays one question at a time; "Next Question" calls `fetchNext` from the `useQuestion` hook
- **TeamPage** (`src/pages/TeamPage.tsx`) — editable team name + score tracker (±10 per button press), one per device

### Question fetching (`src/hooks/useQuestion.ts`)
Tracks seen question IDs in `localStorage` under key `feudy_seen_question_ids`. On each call:
1. Fetches all unseen active question IDs from Supabase
2. Randomly picks one
3. Fetches that question + its answers (nested select, ordered by `rank`)

Returns `{ question, loading, error, fetchNext }`.

### Data model
- **questions**: `id`, `prompt`, `category`, `is_active`, `created_at`
- **answers**: `id`, `question_id`, `text`, `points` (10–50), `rank` (1–5); rank 1 = most popular (50 pts)

### Styling
Three custom colors: `dark-blue` (#385d65), `cream` (#fff5e1), `orange` (#fc5b46). All defined in `src/index.css` under `@theme`.

### TypeScript config
`tsconfig.app.json` enforces `noUnusedLocals` and `noUnusedParameters` — fix both before building.
