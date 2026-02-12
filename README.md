# Student AI

Student AI is a React + TypeScript web app with two main experiences:
- Marketing/public pages (`/`, `/features`, `/pricing`, etc.)
- A student dashboard (`/dashboard/*`) for study workflows

## Stack

- React 19
- TypeScript 5
- Vite 7
- React Router 7
- Tailwind CSS 3
- Recharts
- Lucide React

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Type-check + production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## App Graph

```mermaid
flowchart TD
  A[main.tsx] --> B[BrowserRouter]
  B --> C[App.tsx]

  C --> D[Public Routes]
  C --> E[Dashboard Routes]

  D --> D1[Landing /]
  D --> D2[Features]
  D --> D3[How It Works]
  D --> D4[Pricing]
  D --> D5[Auth/Legal/Info Pages]

  E --> E1[/dashboard]
  E --> E2[/dashboard/courses]
  E --> E3[/dashboard/flashcards]
  E --> E4[/dashboard/quizzes]
  E --> E5[/dashboard/planner]
  E --> E6[/dashboard/assignments]
  E --> E7[/dashboard/study-room]
  E --> E8[/dashboard/messages]
  E --> E9[/dashboard/analytics]
  E --> E10[/dashboard/billing]
  E --> E11[/dashboard/settings]
```

## Project Structure

```text
student-ai/
|-- public/
|-- src/
|   |-- components/
|   |   |-- common/
|   |   |-- dashboard/
|   |   |-- landing/
|   |   `-- layout/
|   |-- data/
|   |-- hooks/
|   |-- pages/
|   |-- types/
|   |-- App.tsx
|   |-- main.tsx
|   `-- index.css
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- vite.config.ts
`-- tsconfig.json
```

## Routing Notes

- Routes are lazy-loaded in `src/App.tsx` for better initial load performance.
- `/app` redirects to `/dashboard`.
- Unknown routes render `NotFoundPage`.

## Build Output

Production artifacts are generated in `dist/` after:

```bash
npm run build
```
