var mongoose = require('mongoose');

// Setup Schema
var sellcarSchema = mongoose.Schema({
    Make: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Trim: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    'Average Odometer': {
        type: Number,
        required: true
    },
    'Dubizzle Price': {
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