import * as moviesService from '../services/movies.service.js'

export function getAll(req, res, next) {
  try {
    res.json(moviesService.getAllMovies())
  } catch (err) {
    next(err)
  }
}

export function search(req, res, next) {
  try {
    const results = moviesService.searchMovies(req.parsedQuery.q)
    res.json(results)
  } catch (err) {
    next(err)
  }
}

export function getById(req, res, next) {
  try {
    res.json(moviesService.getMovieById(req.parsedParams.id))
  } catch (err) {
    next(err)
  }
}

export function create(req, res, next) {
  try {
    const movie = moviesService.createMovie(req.body)
    res.status(201).json(movie)
  } catch (err) {
    next(err)
  }
}

export function update(req, res, next) {
  try {
    res.json(moviesService.updateMovie(req.parsedParams.id, req.body))
  } catch (err) {
    next(err)
  }
}

export function remove(req, res, next) {
  try {
    moviesService.deleteMovie(req.parsedParams.id)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}