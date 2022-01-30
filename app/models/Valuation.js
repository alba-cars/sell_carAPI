const mongoose = require('mongoose')


// Schema for Valuation model
const ValuationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerContact: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    trim: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    spec: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true
    },
    tracked: {
        type: Boolean,
        required: true
    },
    reference: {
        type: String,
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
}, { timestamps: true })

module.exports = mongoose.models.Valuation || mongoose.model("Valuation", ValuationSchema);