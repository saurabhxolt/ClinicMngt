// JWT verification helper
const jwt = require('jsonwebtoken');

exports.verifyToken = (req) => {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.replace('Bearer ', '');
  return jwt.verify(token, process.env.JWT_SECRET);
};
