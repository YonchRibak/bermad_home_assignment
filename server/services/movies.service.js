import * as moviesRepo from '../repositories/movies.repository.js'
import AppError from '../errors/AppError.js'

export function getAllMovies() {
  return moviesRepo.findAll()
}

export function getMovieById(id) {
  const movie = moviesRepo.findById(id)
  if (!movie) throw new AppError(404, `Movie with id ${id} not found`)
  return movie
}

export function searchMovies(query) {
  return moviesRepo.search(query)
}

export function createMovie(data) {
  return moviesRepo.create(data)
}

export function updateMovie(id, data) {
  const movie = moviesRepo.update(id, data)
  if (!movie) throw new AppError(404, `Movie with id ${id} not found`)
  return movie
}

export function deleteMovie(id) {
  const deleted = moviesRepo.remove(id)
  if (!deleted) throw new AppError(404, `Movie with id ${id} not found`)
}
