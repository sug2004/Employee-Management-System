const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackComplaintFormSchema = new Schema({
    category: {
        type: String,
        enum: ['Feedback', 'Complaint'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    submitted_by: {
        type: Schema.Types.ObjectId,
        ref: 'Employee', // Reference to Employee model
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps automatically
});

const FeedbackComplaintForm = mongoose.model('FeedbackComplaintForm', feedbackComplaintFormSchema);
module.exports = FeedbackComplaintForm;
