// Import Sell Car Model
SellCar = require('./sellcarModel');

// Handle Index Actions
exports.index = function (req, res) { 
    var {make, model, trim, year} = req.query;
console.log(make);
    SellCar.find({
        Make: make,
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