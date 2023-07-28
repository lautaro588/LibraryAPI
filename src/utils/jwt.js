const jwt = require("jsonwebtoken");

const SECRET = 'secret';

const generateToken = (payload, expiresIn) => {
    try {
        return jwt.sign(payload, SECRET, { expiresIn });
    } catch (err) {
        console.error("Error when generating token.", err.message);
        throw err;
    }
};

module.exports = { generateToken, SECRET };