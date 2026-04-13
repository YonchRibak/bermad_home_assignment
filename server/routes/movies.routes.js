import { Router } from 'express'
import * as controller from '../controllers/movies.controller.js'
import validate from '../middleware/validate.js'
import {
  searchQuerySchema,
  movieIdParamSchema,
  createMovieSchema,
  updateMovieSchema,
} from '../validation/movies.schemas.js'

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     CastMember:
 *       type: object
 *       properties:
 *         initials:
 *           type: string
 *         name:
 *           type: string
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         year:
 *           type: integer
 *         duration:
 *           type: string
 *         rating:
 *           type: string
 *         imdb_rating:
 *           type: number
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *         plot:
 *           type: string
 *         director:
 *           type: string
 *         written_by:
 *           type: string
 *         studio:
 *           type: string
 *         box_office:
 *           type: string
 *         cast_members:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CastMember'
 *         poster_url:
 *           type: string
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of all movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get('/', controller.getAll)

/**
 * @swagger
 * /movies/search:
 *   get:
 *     summary: Search movies by title
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Search query (case-insensitive title match)
 *     responses:
 *       200:
 *         description: Matching movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get('/search', validate(searchQuerySchema, 'query'), controller.search)

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', validate(movieIdParamSchema, 'params'), controller.getById)

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Created movie
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Validation error
 */
router.post('/', validate(createMovieSchema), controller.create)

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Updated movie
 *       404:
 *         description: Movie not found
 */
router.put(
  '/:id',
  validate(movieIdParamSchema, 'params'),
  validate(updateMovieSchema),
  controller.update
)

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Movie deleted
 *       404:
 *         description: Movie not found
 */
router.delete(
  '/:id',
  validate(movieIdParamSchema, 'params'),
  controller.remove
)

export default router