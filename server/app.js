import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import config from './config.js'
import delay from './middleware/delay.js'
import errorHandler from './middleware/errorHandler.js'
import moviesRouter from './routes/movies.routes.js'
import { setupSwagger } from './docs/swagger.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(
  rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.rateLimitMax,
    message: { error: 'Too many requests, please try again later' },
  })
)

// to simultae latency as requested
app.use(delay)

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})

app.use('/movies', moviesRouter)

setupSwagger(app)

app.use(errorHandler)

export default app