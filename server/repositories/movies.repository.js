import db from '../db/connection.js'

// helper to parse genres and cast_members from JSON strings
function parseRow(row) {
  if (!row) return null
  return {
    ...row,
    genres: JSON.parse(row.genres),
    cast_members: JSON.parse(row.cast_members),
  }
}

export function findAll() {
  return db.prepare('SELECT * FROM movies').all().map(parseRow)
}

export function findById(id) {
  return parseRow(db.prepare('SELECT * FROM movies WHERE id = ?').get(id))
}

export function search(query) {
  return db
    .prepare('SELECT * FROM movies WHERE title LIKE ?')
    .all(`%${query}%`) // wildcard (before and after) for partial matches
    .map(parseRow)
}

export function create(data) {
  const stmt = db.prepare(`
    INSERT INTO movies (title, year, duration, rating, imdb_rating, genres, plot, director, written_by, studio, box_office, cast_members, poster_url)
    VALUES (@title, @year, @duration, @rating, @imdb_rating, @genres, @plot, @director, @written_by, @studio, @box_office, @cast_members, @poster_url)
  `)
  const result = stmt.run({
    ...data,
    genres: JSON.stringify(data.genres),
    cast_members: JSON.stringify(data.cast_members),
  })
  return findById(result.lastInsertRowid)
}

export function update(id, data) {
  const existing = findById(id)
  if (!existing) return null

  const merged = { ...existing, ...data }
  db.prepare(`
    UPDATE movies SET title=@title, year=@year, duration=@duration, rating=@rating,
      imdb_rating=@imdb_rating, genres=@genres, plot=@plot, director=@director,
      written_by=@written_by, studio=@studio, box_office=@box_office,
      cast_members=@cast_members, poster_url=@poster_url
    WHERE id=@id
  `).run({
    id,
    ...merged,
    genres: JSON.stringify(merged.genres),
    cast_members: JSON.stringify(merged.cast_members),
  })
  return findById(id)
}

export function remove(id) {
  const result = db.prepare('DELETE FROM movies WHERE id = ?').run(id)
  return result.changes > 0
}
