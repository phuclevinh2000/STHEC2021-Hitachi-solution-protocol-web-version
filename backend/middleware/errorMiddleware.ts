
const notFound = (req: { originalUrl: any }, res: { status: (arg0: number) => void }, next: (arg0: Error) => void) => { //throw error if wrong address
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err: { message: any; stack: any }, req: any, res: { statusCode: number; status: (arg0: any) => void; json: (arg0: { message: any; stack: any }) => void }, next: any) => {  //custom error handler
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

export { notFound, errorHandler }