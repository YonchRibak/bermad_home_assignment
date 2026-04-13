import { z } from 'zod'

const castMemberSchema = z.object({
  initials: z.string().min(1),
  name: z.string().min(1),
})

export const searchQuerySchema = z.object({
  q: z.string().optional().default(''),
})

export const movieIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
})

export const createMovieSchema = z.object({
  title: z.string().min(1),
  year: z.number().int().min(1888),
  duration: z.string().min(1),
  rating: z.string().min(1),
  imdb_rating: z.number().min(0).max(10),
  genres: z.array(z.string().min(1)).min(1),
  plot: z.string().min(1),
  director: z.string().min(1),
  written_by: z.string().min(1),
  studio: z.string().min(1),
  box_office: z.string().min(1),
  cast_members: z.array(castMemberSchema).min(1),
  poster_url: z.string().url(),
})

export const updateMovieSchema = createMovieSchema.partial()
