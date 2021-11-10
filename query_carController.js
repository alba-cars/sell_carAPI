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

 // Handle View Sell Car Info
exports.view = function(req, res) {
    SellCar.find({ Make: req.params.make }, function (err, querycar) {
        if(err)
            res.send(err);
        res.json({
            message: 'querycarr Details Loading...',
            data: querycar
        });
    });
};



// SellCar.find({make: 'Audi'}, (error, sellcars) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(sellcars)
//     }
// })


