const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connect')

const tasksRouter = require('./routes/tasks')

// *** Middlewares
app.use(express.json())


app.use('/api/v1/tasks', tasksRouter)


app.use((err, req, res, next) => { 
  err.status = err.status || 500
  const handledError = err.status < 500

  res.status(err.status).json({
    message: handledError ? err.message : 'Internal Server Error'
  })

 })


const port = process.env.PORT | 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})