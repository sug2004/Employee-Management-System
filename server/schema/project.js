const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_name: {
        type: String,
        required: true
    },
    project_description: {
        type: String,
        required: true
    },
    project_lead: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps automatically
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
