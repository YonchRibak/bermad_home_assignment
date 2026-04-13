import Database from 'better-sqlite3'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = process.env.DB_PATH || resolve(__dirname, 'movies.db')

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

const schema = readFileSync(resolve(__dirname, 'schema.sql'), 'utf-8')

const movies = JSON.parse(
  readFileSync(resolve(__dirname, '..', 'movies.json'), 'utf-8')
)

db.exec('DROP TABLE IF EXISTS movies')
db.exec(schema)

const insert = db.prepare(`
  INSERT INTO movies (title, year, duration, rating, imdb_rating, genres, plot, director, written_by, studio, box_office, cast_members, poster_url)
  VALUES (@title, @year, @duration, @rating, @imdb_rating, @genres, @plot, @director, @written_by, @studio, @box_office, @cast_members, @poster_url)
`)

const seedAll = db.transaction(() => {
  for (const movie of movies) {
    insert.run({
      title: movie.title,
      year: movie.year,
      duration: movie.duration,
      rating: movie.rating,
      imdb_rating: movie.imdb_rating,
      genres: JSON.stringify(movie.genres),
      plot: movie.plot,
      director: movie.director,
      written_by: movie.written_by,
      studio: movie.studio,
      box_office: movie.box_office,
      cast_members: JSON.stringify(movie.cast),
      poster_url: movie.poster_url,
    })
  }
})

seedAll()
console.log(`Seeded ${movies.length} movies into ${dbPath}`)
db.close()
