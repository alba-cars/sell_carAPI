// Import Sell Car Model
SellCar = require('../models/sellcarModel');

// Handle Index Actions
exports.index = function (req, res) { 
    var {make, model, trim, year} = req.query;
console.log(make, model, trim, year);
    SellCar.find({
        Make: make,
        Model: model,
        Trim: trim,
        Year: year
    }, function (err, sellcars) { 
        if(err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Cars Retrieved Successfully",
            data: sellcars
        });
     });
 };