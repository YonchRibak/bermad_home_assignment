interface GenreBadgeProps {
  genre: string
}

export function GenreBadge({ genre }: GenreBadgeProps) {
  return (
    <span className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full">
      {genre}
    </span>
  )
}
