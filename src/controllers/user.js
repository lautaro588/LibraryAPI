const { userService } = require("../services");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const validUser = await userService.validateUser(username, password);
        if (validUser) {
            const token = userService.getUserToken(username);
            return res.json(token);
        };
        res.status(401).json({ error: 'Invalid User' });
    } catch (err) {
        res.status(500).json({ action: 'Login', error: err.message });
    }
};

module.exports = { login };