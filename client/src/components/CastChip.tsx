interface CastChipProps {
  initials: string
  name: string
}

export function CastChip({ initials, name }: CastChipProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
      <span className="text-xs font-bold text-white bg-gray-500 rounded px-1.5 py-0.5">
        {initials}
      </span>
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  )
}
