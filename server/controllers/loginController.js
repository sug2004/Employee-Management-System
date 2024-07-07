const loginService = require('../services/loginService');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await loginService.login(email, password);
        res.status(200).json({
            message: 'success',
            result:{  email:result.email,
                    fname:result.first_name,
                    lname:result.last_name,
                    role:result.role,
        }});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function register(req, res) {
    try {
        const { first_name, last_name, email, password, role } = req.body;
        const result = await loginService.register(first_name, last_name, email, password, role);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { login,register };