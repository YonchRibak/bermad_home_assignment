import Database from 'better-sqlite3'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = process.env.DB_PATH || resolve(__dirname, 'movies.db')

const db = new Database(dbPath)
db.pragma('journal_mode = WAL') // better concurrency for reads/writes
db.pragma('foreign_keys = ON')

const schema = readFileSync(resolve(__dirname, 'schema.sql'), 'utf-8')
db.exec(schema)

export default db
