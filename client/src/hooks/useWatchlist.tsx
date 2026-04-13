import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface WatchlistContextType {
  watchlist: Set<number>
  toggle: (movieId: number) => void
}

const WatchlistContext = createContext<WatchlistContextType | null>(null)

const STORAGE_KEY = 'watchlist'

function loadWatchlist(): Set<number> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return new Set(JSON.parse(stored))
  } catch { /* ignore corrupt data */ }
  return new Set()
}

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useState<Set<number>>(loadWatchlist)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...watchlist]))
  }, [watchlist])

  function toggle(movieId: number) {
    setWatchlist(prev => {
      const next = new Set(prev)
      if (next.has(movieId)) {
        next.delete(movieId)
      } else {
        next.add(movieId)
      }
      return next
    })
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, toggle }}>
      {children}
    </WatchlistContext.Provider>
  )
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext)
  if (!ctx) throw new Error('useWatchlist must be used within WatchlistProvider')
  return ctx
}
