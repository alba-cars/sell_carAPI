let router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')

router.get('/', function(req, res) {
    const user = User.find({})
    res.json(user);
});

router.post('/login', (req, res) => {
    const hashPass =  bcrypt.hash(req.body.password, 12)
    res.json({
        email: req.body.email,
        password: hashPass
    });
});

router.post('/create', (req, res)  => {
    const hashPass =   bcrypt.hashSync(req.body.password, 12)
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    }
    User.save(newUser)

    res.json({
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    })

})



module.exports = router;