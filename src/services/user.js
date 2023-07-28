const { userProvider } = require('../providers');
const jwt = require('../utils/jwt');

const validateUser = async (name, password) => await userProvider.findUser(name, password);

const getUserToken = (username) => jwt.generateToken({ user: username }, '1m');

module.exports = { validateUser, getUserToken };