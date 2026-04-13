# My 20 Favorite Movies

A full-stack web app that lets you browse and search through my personal list of 20 favorite movies. Built as a home assignment for Bermad.

## What it does

- Displays movie cards with poster, rating, cast, plot, and other details
- Search by title with debounced input (no unnecessary API calls)
- Skeleton loading states while data is being fetched
- Watchlist toggle that persists across page refreshes (localStorage)
- Error handling when the server is unreachable

## Tech stack

**Client:** React 19, TypeScript, Tailwind CSS, Vite

**Server:** Express 5, Node.js (ES modules), better-sqlite3, Zod validation, Swagger/OpenAPI docs

Movie posters are pulled from TMDB via a one-time script.

## Getting started

You'll need Node.js installed.

**1. Start the server**

```bash
cd server
npm install
npm run seed   # seed the SQLite database
npm run dev
```

Runs on `http://localhost:3001`. API docs available at `http://localhost:3001/api-docs`.

**2. Start the client**

```bash
cd client
npm install
npm run dev
```

Opens on `http://localhost:5173` by default.

## Project structure

```
client/
  src/
    components/    # MovieCard, SearchBar, WatchlistButton, GenreBadge, etc.
    hooks/         # useMovies (data fetching), useWatchlist (context + localStorage)
    App.tsx        # Main layout and state
    types.ts       # Shared TypeScript interfaces

server/
  controllers/     # Route handlers
  services/        # Business logic
  repositories/    # Database access (better-sqlite3)
  routes/          # Express route definitions
  middleware/      # Error handling, validation, artificial delay
  docs/            # Swagger/OpenAPI spec
  scripts/         # DB seeding, TMDB poster fetching
  config.js        # Centralized configuration
```

## Design decisions

- **Layered architecture** on the server (controllers → services → repositories) for separation of concerns.
- **SQLite** via better-sqlite3 instead of a static JSON file — supports proper querying and is easy to set up with no external dependencies.
- **Zod** for request validation, keeping invalid data out at the middleware level.
- **Swagger/OpenAPI** docs so the API is self-documenting and easy to explore.
- **Rate limiting, CORS, and request logging** (Morgan) on the server for production-readiness.
- **Debounce + AbortController** in the search hook to avoid race conditions and wasted requests.
- **React Context** for the watchlist rather than prop drilling or pulling in a state library for something this small.
- **localStorage** for watchlist persistence — a real app would sync this to a backend, but it felt like the right scope for an assignment.
- **Skeleton cards** instead of a spinner because they give better perceived performance and hint at the layout before content loads.

## Author

Jonathan Ribak
