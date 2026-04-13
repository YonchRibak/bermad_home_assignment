import { SearchX } from 'lucide-react'

interface NoResultsProps {
  query: string
}

export function NoResults({ query }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-gray-400">
      <SearchX className="w-12 h-12" />
      <p className="text-lg font-medium">No movies found for "{query}"</p>
      <p className="text-sm">Try a different search term</p>
    </div>
  )
}
