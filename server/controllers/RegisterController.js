const registerService = require('../services/registerService.js');

async function register(req, res) {
    try {
        const { first_name, last_name, email, password, role } = req.body;
        const result = await registerService.register(first_name, last_name, email, password, role);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { register };