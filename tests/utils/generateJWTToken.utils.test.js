const jwt = require('jsonwebtoken');
const config = require('config');
const { generateJWTToken } = require('../../utils/generateJWTToken');

describe('Generate JWT Token Utils', () => {
  test(`Validate JWT Token`, () => {
    const token = generateJWTToken({ username: 'messi' });
    const validToken = jwt.verify(token, process.env.JWT_TOKEN);
    const { username } = validToken.data;

    expect(username).toEqual('messi');
  });
});
