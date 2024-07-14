const express = require('express')
const app = express()
require('dotenv').config()
require('./db/connect')


app.get('/', (req, res) => {
  console.log(process.env.PORT);
  res.send('Hello World!')
})



const port = process.env.PORT | 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})