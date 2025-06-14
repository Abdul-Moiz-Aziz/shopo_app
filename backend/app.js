// backend/app.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
connectDB();

// Middleware
app.use(cors({
      origin: 'http://localhost:5173',
      credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
      res.send('Hello World!');
});
// app.get('/api/test-api', (req, res) => {
//       res.send('Hello World!');
// });

app.use('/api/auth', authRoutes);  


// Error Handler
app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Something went wrong!' });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
});
