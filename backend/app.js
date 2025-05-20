const express = require('express')
const app = express()

const connectDB = require('./config/db');
require('dotenv').config();

// connectDB();

app.get('/', (req, res) => {
      res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
      console.log(`Server is running on port http://localhost${process.env.PORT}`)
})
