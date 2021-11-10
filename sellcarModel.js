var mongoose = require('mongoose');

// Setup Schema
var sellcarSchema = mongoose.Schema({
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
        type: Number,
        required: true
    },
    odometer: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

// Export Sell Car Model
var SellCar = module.exports = mongoose.model('sellcar', sellcarSchema);

module.exports.get = function(callback, limit) {
    SellCar.find(callback).limit(limit);
}