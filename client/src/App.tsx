import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { SearchBar } from './components/SearchBar'
import { MovieCard } from './components/MovieCard'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading } = useMovies(query)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <SearchBar query={query} onQueryChange={setQuery} />
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
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