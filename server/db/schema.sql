CREATE TABLE IF NOT EXISTS movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  duration TEXT NOT NULL,
  rating TEXT NOT NULL,
  imdb_rating REAL NOT NULL,
  genres TEXT NOT NULL,       -- JSON array
  plot TEXT NOT NULL,
  director TEXT NOT NULL,
  written_by TEXT NOT NULL,
  studio TEXT NOT NULL,
  box_office TEXT NOT NULL,
  cast_members TEXT NOT NULL, -- JSON array
  poster_url TEXT NOT NULL
);
