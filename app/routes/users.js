let router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const cookie = require("cookie");


router.get('/', async (req, res) => {
    User.find({}).exec()
    .then(docs => {
        res.status(200).json(docs)
    }).catch(err => {
        res.status(400).json({ error: err })
    })  
});

router.post('/login', async (req, res) =>  {
    const tmpUser = await User.findOne({ email: req.body.email.trim().toLowerCase()})
        if(tmpUser){
            // console.log(tmpUser.password)
            const isMatch = await bcrypt.compare(req.body.password.trim().toLowerCase(), tmpUser.password)
            if(isMatch){
                // res.status(200).json(tmpUser)
                const token = jwt.sign({
                      user: tmpUser._id,
                    },
                    process.env.JWT_SECRET_KEY
                  )

                

                    res.cookie("token", {id:tmpUser.id, token: token});
                    res.json(tmpUser)

            }else{
                res.status(200).json({message: "Password is incorrect"})
            }

        }
});

router.post('/create', async (req, res)  => {
    const hashPass =   bcrypt.hashSync(req.body.password, 12)
    const tmpUser = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: hashPass
    }
    
    const newUser = new User(tmpUser)
    const user = await newUser.save()
    if(!user){
        res.status(400).json({messag: "Error occur"})
    }else{
        res.status(200).json(user)
    }
})


router.get("/:id",  (req, res) => {
    User.find({_id: req.params.id}).exec()
    .then(docs => {
        res.status(200).json(docs)
    }).catch(err => {
        res.status(400).json({ error: err })
    })  
  });
router.put('/:id', async (req, res)  => {

User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    roles: req.body.roles,
    status:req.body.status
}, {new: true})
.then(user => {
    if(!user) {
        return res.status(404).send({
            message: "User not found with id " + req.params.id
        });
    }
    res.send(user);
}).catch(err => {
    return res.status(500).send({
        message: "Error updating user with id " + req.params.id
    });
});
})

  


module.exports = router;