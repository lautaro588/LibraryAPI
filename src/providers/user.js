const { User } = require('../models');

const findUser = async (name, password) => {
    try {
        return await User.findOne({ where: { name, password } });
    } catch (err) {
        console.error("Error when fetching user.", err.message);
        throw err;
    }
};

module.exports = { findUser };