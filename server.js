const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connect')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

const tasksRouter = require('./routes/tasks')

// *** Middlewares
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)
app.use(notFound)

app.use(errorHandlerMiddleware)


const port = process.env.PORT | 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})