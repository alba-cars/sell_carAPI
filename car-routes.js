// Initialize express router
let router = require('express').Router();

// Import Sell Car Controller
var carController = require('./carController');

// Sell Car Routes
router.route('/')
    .get(carController.index);

// Export API routes
module.exports = router;