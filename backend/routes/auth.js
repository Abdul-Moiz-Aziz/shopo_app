// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.use('/', authController);

module.exports = router;
