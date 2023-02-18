const jwt = require('jsonwebtoken');
const config = require('config');

const generateJWTToken = (userDetails) => {
  const token = jwt.sign(
    {
      expiresIn: process.env.JWT_EXPIRED_DATE,
      data: userDetails,
    },
    process.env.JWT_TOKEN
  );

  return token;
};

module.exports = {
  generateJWTToken,
};
