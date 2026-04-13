import type { Movie } from '../types'
import { GenreBadge } from './GenreBadge'
import { StarRating } from './StarRating'
import { CastChip } from './CastChip'
import { WatchlistButton } from './WatchlistButton'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex gap-6 p-6 bg-white border border-gray-200 rounded-xl">
      {/* Left: Poster + Rating + Watchlist */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="w-40 h-56 bg-gray-800 rounded-lg overflow-hidden">
          {movie.poster_url ? (
            <img src={movie.poster_url} alt={movie.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              No Poster
            </div>
          )}
        </div>
        <StarRating rating={movie.imdb_rating} />
        <span className="text-sm text-gray-500">{movie.imdb_rating} / 10 · IMDb</span>
        <WatchlistButton />
      </div>

      {/* Right: Details */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{movie.title}</h2>
          <p className="text-sm text-gray-500">{movie.year} · {movie.duration} · {movie.rating}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <GenreBadge key={genre} genre={genre} />
          ))}
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Plot</h3>
          <p className="text-sm text-gray-700 mt-1">{movie.plot}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <div>
            <span className="text-xs text-gray-500">Director</span>
            <p className="text-sm font-semibold text-gray-900">{movie.director}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Written by</span>
            <p className="text-sm font-semibold text-gray-900">{movie.written_by}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Studio</span>
            <p className="text-sm font-semibold text-gray-900">{movie.studio}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">Box office</span>
            <p className="text-sm font-semibold text-gray-900">{movie.box_office}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Cast</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {movie.cast.map((member) => (
              <CastChip key={member.name} initials={member.initials} name={member.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
