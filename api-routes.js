// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to RESTHub! UwU!'
    });
});

router.get('/test', function(req, res) {
    res.json({
        status: 'API is Workingsss',
        message: 'Welcome to RESTHub! UwU!'
    });
});

// Import Sell Car Controller
var sellcarController = require('./sell_carController');

// Sell Car Routes
router.route('/sellcar')
    .get(sellcarController.index)
    .post(sellcarController.new);


router.route('/sellcar/:sellcar_id')
    .get(sellcarController.view)
    .patch(sellcarController.update)
    .put(sellcarController.update)
    .delete(sellcarController.delete)

  


// Import Query Car Controller
var querycarController = require('./query_carController');

// Query Car Routes
router.route('/querycar/:make')
.get(querycarController.view)

router.route('/querycar')
    .get(querycarController.view)

// Export API routes
module.exports = router;