const Employee = require('../schema/employee');

async function login(email, password) {
    const user
    = await Employee.findOne({ email, password });
    if (!user) {
        throw new Error('Invalid login credentials');
    }
    return user;
}

module.exports = { login };