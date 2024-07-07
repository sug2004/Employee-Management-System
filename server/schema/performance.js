const performanceReviewSchema = new Schema({
    employee_id: {
        type: Schema.Types.ObjectId,
        ref: 'Employee', // Reference to Employee model
        required: true
    },
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Project', // Reference to Project model
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    timestamps: true // This will add createdAt and updatedAt timestamps automatically
});

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewSchema);
module.exports = PerformanceReview;
