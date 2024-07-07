const Employee = require('../schema/employee');
const bcrypt = require('bcrypt');
async function login(email, password) {
    const user
    = await Employee.findOne({ email, password });
    if (!user) {
        throw new Error('Invalid login credentials');
    }
    return user;
}


async function register(first_name, last_name, email, password, role) {
    try {
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            throw new Error('Employee with this email already registered');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const employee = new Employee({ first_name, last_name, email, password: hashedPassword, role });
        await employee.save();
        return employee;
    } catch (error) {
        console.error(error); 
        throw new Error('Failed to register employee');
    }
}

module.exports = { login,
                register };