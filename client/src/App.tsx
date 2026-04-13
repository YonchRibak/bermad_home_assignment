import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { SearchBar } from './components/SearchBar'
import { MovieCard } from './components/MovieCard'
import { SkeletonCard } from './components/SkeletonCard'
import { NoResults } from './components/NoResults'
import { AlertTriangle } from 'lucide-react'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading, error } = useMovies(query)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <SearchBar query={query} onQueryChange={setQuery} />
            {loading
            ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
            : error
                ? <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                    <AlertTriangle className="w-12 h-12 mb-4 text-amber-500" />
                    <p className="text-lg font-medium text-gray-700">Something went wrong</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                : movies.length > 0
                    ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    : <NoResults query={query} />
            }
      </div>
    </div>
  )
}

export default App