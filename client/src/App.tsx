import { useState } from 'react'
import { useMovies } from './hooks/useMovies'
import { SearchBar } from './components/SearchBar'

function App() {
  const [query, setQuery] = useState('')
  const { movies, loading } = useMovies(query)

  return (
    <div>
      <SearchBar query={query} onQueryChange={setQuery} />
      <pre>{loading ? 'Loading...' : JSON.stringify(movies, null, 2)}</pre>
    </div>
  )
}

export default App