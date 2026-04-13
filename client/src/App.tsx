import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { SearchBar } from './components/SearchBar'
import { MovieCard } from './components/MovieCard'
import { SkeletonCard } from './components/SkeletonCard'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading } = useMovies(query)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <SearchBar query={query} onQueryChange={setQuery} />
        {loading ? (
          [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default App