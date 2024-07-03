const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lead: {
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
