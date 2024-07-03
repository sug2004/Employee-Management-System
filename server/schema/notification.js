const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    employee_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee', // Reference to Employee model
        required: true
    },
    content: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false, // Default value is false
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps automatically
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
