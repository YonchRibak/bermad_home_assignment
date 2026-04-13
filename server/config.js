import 'dotenv/config'

export default Object.freeze({
  port: parseInt(process.env.PORT) || 3001,
  rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60_000,
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  dbPath: process.env.DB_PATH || new URL('./db/movies.db', import.meta.url).pathname,
  delayMs: parseInt(process.env.DELAY_MS) || 1500,
})
