const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connect')

const tasksRouter = require('./routes/tasks')


app.use('/api/v1/tasks', tasksRouter)



const port = process.env.PORT | 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})