// backend/controllers/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
      try {
            const { name, email, password } = req.body;
            let user = await User.findOne({ email });
            if (user) return res.status(400).json({ message: 'User already exists' });

            user = new User({ name, email, password });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            const payload = { id: user.id };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.cookie('token', token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === 'production',
                  sameSite: 'strict',
                  maxAge: 3600000
            });

            res.status(201).json({
                  user: { id: user.id, name: user.name, email: user.email },
                  message: 'Registration successful'
            });
      } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
      }
});

// Login
router.post('/login', async (req, res) => {
      try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'Invalid credentials' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

            const payload = { id: user.id };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.cookie('token', token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === 'production',
                  sameSite: 'strict',
                  maxAge: 3600000
            });

            res.json({
                  user: { id: user.id, name: user.name, email: user.email },
                  message: 'Login successful'
            });
      } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
      }
});

// Logout
router.post('/logout', (req, res) => {
      res.clearCookie('token');
      res.json({ message: 'Logout successful' });
});

module.exports = router;
