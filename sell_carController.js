// Import Sell Car Model
SellCar = require('./sellcarModel');

// Handle Index Actions
exports.index = function (req, res) { 
    SellCar.get(function (err, sellcars) { 
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

//  Handle Create Sell Car Actions
exports.new = function(req, res) {
    var sellcar = new SellCar();
    sellcar.make = req.body.make ? req.body.make : sellcar.make;
    sellcar.model = req.body.model;
    sellcar.trim = req.body.trim;
    sellcar.year = req.body.year;
    sellcar.odometer = req.body.odometer;
    sellcar.price = req.body.price;

    // save the car and check for errors
    sellcar.save(function (err) {
        // if (err)
        // res.json(err);
        res.json({
            message: 'New Sell Car Created!',
            data: sellcar
        });
    });
};

// Handle View Sell Car Info
exports.view = function(req, res) {
    SellCar.findById(req.params.sellcar_id, function (err, sellcar) {
        if(err)
            res.send(err);
        res.json({
            message: 'Sell Car Details Loading...',
            data: sellcar
        });
    });
};

// Handle Update Sell Car Info
exports.update = function(req, res) {
    SellCar.findById(req.params.sellcar_id, function(err, sellcar) {
        if(err)
            res.send(err);

            sellcar.make = req.boday.make ? req.body.make : sellcar.make;
            sellcar.model = req.body.model;
            sellcar.trim = req.body.trim;
            sellcar.year = req.body.year;
            sellcar.odometer = req.body.odometer;
            sellcar.price = req.body.price;

            // save the sellcar and check for errors
            sellcar.save(function(err) {
                if(err)
                    res.json(err);
                res.json({
                    message: 'Sell Car Info  Updated',
                    data: sellcar
                });
            });
    });
};

// Handle Delete Sell Car
exports.delete = function (req, res) { 
    SellCar.remove({
        _id: req.params.sellcar_id
    }, function (err, sellcar) {
        if(err)
            res.send(err);

        res.json({
            status: 'success',
            message: 'Sell Car Deleted!'
        });
    });
 };