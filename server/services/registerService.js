const bcrypt = require('bcrypt');
const Employee = require('../schema/employee');

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
        throw new Error('Failed to register employee');
    }
}

module.exports = { register };