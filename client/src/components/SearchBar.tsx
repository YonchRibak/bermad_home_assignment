interface SearchBarProps {
  query: string
  onQueryChange: (value: string) => void
}

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search movies..."
    />
  )
}