const loginService = require('../services/loginService');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await loginService.login(email, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { login };