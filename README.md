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

**Server:** Express.js (Node), serving a static JSON dataset

Movie posters are pulled from TMDB via a one-time script.

## Getting started

You'll need Node.js installed.

**1. Start the server**

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:3001`.

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
    components/    # MovieCard, SearchBar, WatchlistButton, etc.
    hooks/         # useMovies (data fetching), useWatchlist (context + localStorage)
    App.tsx        # Main layout and state
    types.ts       # Shared TypeScript interfaces

server/
  routes/          # Movie endpoints
  middleware/      # Artificial delay (for testing loading states)
  movies.json      # The 20 movies
  scripts/         # TMDB poster fetching script
```

## Design decisions

- **Debounce + AbortController** in the search hook to avoid race conditions and wasted requests.
- **React Context** for the watchlist rather than prop drilling or pulling in a state library for something this small.
- **localStorage** for watchlist persistence — a real app would sync this to a backend, but it felt like the right scope for an assignmment.
- **Skeleton cards** instead of a spinner because they give better perceived performance and hint at the layout before content loads.

## Author

Jonathan Ribak
