const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyToken = async (req, res, next) => {
      // Get token from cookies
      const token = req.cookies.token;

      if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }

      try {
            // Verify token
            const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
            req.userId = decoded.id;
            next();
      } catch (error) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
};

module.exports = { verifyToken };