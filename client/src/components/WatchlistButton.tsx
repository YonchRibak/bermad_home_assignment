import { Plus } from 'lucide-react'

export function WatchlistButton() {
  return (
    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
      <Plus className="w-4 h-4" />
      Watchlist
    </button>
  )
}
