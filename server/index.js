import express from 'express'
import delay from './middleware/delay.js'
import moviesRouter from './routes/movies.js'
import cors from 'cors'


const app = express()
const PORT = 3001


app.use(cors())
app.use(delay)
app.use('/movies', moviesRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})