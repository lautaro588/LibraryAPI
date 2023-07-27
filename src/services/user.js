const { userProvider } = require('../providers');

const validateUser = async (name, password) => await userProvider.findUser(name, password);

module.exports = { validateUser };