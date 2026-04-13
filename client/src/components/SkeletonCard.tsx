export function SkeletonCard() {
  return (
    <div className="flex gap-6 p-6 bg-white border border-gray-200 rounded-xl animate-pulse">
      {/* Left: Poster + Rating + Button */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="w-40 h-56 bg-gray-200 rounded-lg" />
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
          ))}
        </div>
        <div className="w-24 h-4 bg-gray-200 rounded" />
        <div className="w-28 h-9 bg-gray-200 rounded-lg" />
      </div>

      {/* Right: Details */}
      <div className="flex flex-col gap-4 flex-1">
        <div>
          <div className="w-48 h-7 bg-gray-200 rounded" />
          <div className="w-36 h-4 bg-gray-200 rounded mt-2" />
        </div>

        <div className="flex gap-2">
          <div className="w-16 h-7 bg-gray-200 rounded-full" />
          <div className="w-20 h-7 bg-gray-200 rounded-full" />
          <div className="w-14 h-7 bg-gray-200 rounded-full" />
        </div>

        <div>
          <div className="w-12 h-3 bg-gray-200 rounded mb-2" />
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-full h-4 bg-gray-200 rounded mt-1" />
          <div className="w-3/4 h-4 bg-gray-200 rounded mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="w-16 h-3 bg-gray-200 rounded" />
              <div className="w-28 h-4 bg-gray-200 rounded mt-1" />
            </div>
          ))}
        </div>

        <div>
          <div className="w-12 h-3 bg-gray-200 rounded mb-2" />
          <div className="flex gap-2">
            <div className="w-36 h-8 bg-gray-200 rounded-lg" />
            <div className="w-32 h-8 bg-gray-200 rounded-lg" />
            <div className="w-34 h-8 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
