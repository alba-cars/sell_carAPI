let router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require("jsonwebtoken");



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
                const token = jwt.sign(
                    {
                      user: tmpUser._id,
                    },
                    process.env.JWT_SECRET_KEY
                  )

                  res.cookie("token", token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                  }).send();

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


router.get("/loggedIn", (req, res) => {
    try {
      const token = req.cookies.token;
      console.log(req.cookies.token)
      if (!token) return res.json(false);
        
      jwt.verify(token, process.env.JWT_SECRET_KEY);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
  });


module.exports = router;