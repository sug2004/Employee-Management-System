const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    added_by: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    assigned_to: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    status_employee: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        required: true
    },
    status_verification: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps automatically
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
