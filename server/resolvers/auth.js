// server/middlewares/is-auth.js
const jwt = require('jsonwebtoken');

module.exports = (req) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return false;
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    return false;
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return false;
  }
  if (!decodedToken) {
    return false;
  }
  return true;
};
