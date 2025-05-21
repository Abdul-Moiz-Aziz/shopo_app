const express = require('express')
const app = express()

const connectDB = require('./config/db');
const cloudinary = require('./config/cloudinary');
require('dotenv').config();

connectDB();

// cloudinary.uploader
//       .upload("./wallpaperflare.com_wallpaper (1).jpg")
//       .then(result => console.log(result));


app.get('/', (req, res) => {
      res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
      console.log(`Server is running on port http://localhost${process.env.PORT}`)
})
