import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

export function StarRating({ rating }: StarRatingProps) {
  const stars = Math.round(rating / 2)

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= stars ? 'fill-yellow-400 text-yellow-400' : 'fill-none text-gray-300'}`}
        />
      ))}
    </div>
  )
}
