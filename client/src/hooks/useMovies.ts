import { useState, useEffect } from 'react'
import type { Movie } from '../types'


const API_BASE = import.meta.env.VITE_API_BASE

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const timeout = setTimeout(async () => {
      setLoading(true)
      setError(null)
      try {
        const url = query
          ? `${API_BASE}/movies/search?q=${encodeURIComponent(query)}`
          : `${API_BASE}/movies`

        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) {
          throw new Error(`Server error (${res.status})`)
        }
        const data = await res.json()
        setMovies(data)
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message)
          setMovies([])
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

  return { movies, loading, error }
}