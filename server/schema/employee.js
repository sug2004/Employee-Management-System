const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    present: {
        type: Boolean,
        required: true
    }
});

const employeeSchema = new mongoose.Schema({
    first_name: { 
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'employee', 'HR', 'manager']
    },
    attendance: [attendanceSchema]
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
