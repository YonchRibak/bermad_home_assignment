import { Router } from 'express'
import { readFileSync } from 'fs'

const movies = JSON.parse(readFileSync(new URL('../movies.json', import.meta.url)))
const router = Router()

router.get('/', (req, res) => {
  res.json(movies)
})

router.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || ''
  const results = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  )
  res.json(results)
})

export default router