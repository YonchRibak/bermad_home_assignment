import { Plus, Check } from 'lucide-react'
import { useWatchlist } from '../hooks/useWatchlist'

interface WatchlistButtonProps {
  movieId: number
}

export function WatchlistButton({ movieId }: WatchlistButtonProps) {
  const { watchlist, toggle } = useWatchlist()
  const isAdded = watchlist.has(movieId)

  return (
    <button
      onClick={() => toggle(movieId)}
      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isAdded
          ? 'bg-amber-500 text-white border border-amber-500 hover:bg-amber-600'
          : 'text-gray-700 border border-gray-300 hover:bg-gray-50'
      }`}
    >
      {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      {isAdded ? 'Watchlisted' : 'Watchlist'}
    </button>
  )
}
