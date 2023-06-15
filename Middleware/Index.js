// authMiddleware.js
const jwt = require('jsonwebtoken');
const authenticateUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');
  console.log(token)

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token,  process.env.JWT);

    // Add the decoded user information to the request object
    req.user = decoded.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateUser;
