import 'dotenv/config'
import { readFileSync, writeFileSync } from 'fs'

const API_KEY = process.env.TMDB_API_KEY
const movies = JSON.parse(readFileSync(new URL('../movies.json', import.meta.url)))

for (const movie of movies) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movie.title)}&year=${movie.year}`
  )
  const data = await res.json()
  const poster = data.results?.[0]?.poster_path

  if (poster) {
    movie.poster_url = `https://image.tmdb.org/t/p/w300${poster}`
    console.log(`✓ ${movie.title}`)
  } else {
    console.log(`✗ ${movie.title} — not found`)
  }
}

writeFileSync(new URL('../movies.json', import.meta.url), JSON.stringify(movies, null, 2))
console.log('Done!')