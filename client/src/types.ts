export interface CastMember {
    initials: string
    name: string
}

export interface Movie {
    id: number
    title: string
    year: number
    duration: string
    rating: string
    imdb_rating: number
    genres: string[]
    plot: string
    director: string
    written_by: string
    studio: string
    box_office: string
    cast: CastMember[]
    poster_url: string | null
}