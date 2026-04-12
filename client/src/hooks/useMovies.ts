import { useState, useEffect } from 'react'
import type { Movie } from '../types'


const API_BASE = import.meta.env.VITE_API_BASE

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const timeout = setTimeout(async () => {
      setLoading(true)
      try {
        const url = query
          ? `${API_BASE}/movies/search?q=${encodeURIComponent(query)}`
          : `${API_BASE}/movies`

        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json()
        setMovies(data)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error(err)
        }
      } finally {
        setLoading(false)
      }
    }, query ? 300 : 0)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [query])

  return { movies, loading }
}