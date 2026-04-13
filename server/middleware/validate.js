import AppError from '../errors/AppError.js'

export default function validate(schema, source = 'body') {
  return (req, res, next) => {
    const result = schema.safeParse(req[source])
    if (!result.success) {
      const message = result.error.issues.map(i => i.message).join(', ')
      return next(new AppError(400, message))
    }
    if (source === 'body') {
      req.body = result.data
    } else if (source === 'query') {
      req.parsedQuery = result.data
    } else if (source === 'params') {
      req.parsedParams = result.data
    }
    next()
  }
}