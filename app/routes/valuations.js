let router = require('express').Router()
const User = require('../models/User')
const Valuation = require('../models/Valuation')



router.get('/', async(req, res) => {
    Valuation.find({}).exec()
    .then(docs => {
        res.status(200).json(docs)
    }).catch(err => {
        res.status(400).json({ error: err })
    })  
});

router.post('/create', async(req, res)  => {

    const newValuation =  new Valuation({
        userId:req.body.userId,
        customerEmail:req.body.customerEmail,
        customerName:req.body.customerName,
        customerContact:req.body.customerContact,
        make: req.body.make,
        model: req.body.model,
        trim: req.body.trim,
        year: req.body.year,
        spec: req.body.spec,
        mileage:req.body.mileage,
        priceRange:req.body.priceRange,
        tracked:req.body.tracked,
        reference:req.body.reference,
    })
    const valuation = await newValuation.save()
    if(!valuation){
        res.status(400).json({messag: "Error"})
    }else{
        res.status(200).json(valuation)
    }
})
router.put('/:id', async(req, res)  => {

    Valuation.findByIdAndUpdate(req.params.id, {
        customerEmail:req.body.customerEmail,
        customerName:req.body.customerName,
        customerContact:req.body.customecustomerContactrName,
        make: req.body.make,
        model: req.body.model,
        trim: req.body.trim,
        year: req.body.year,
        spec: req.body.spec,
        mileage:req.body.mileage,
        priceRange:req.body.priceRange,
        tracked:req.body.tracked,
        reference:req.body.reference,
    }, {new: true})
    .then(valuation => {
        if(!valuation) {
            return res.status(404).send({
                message: "Valuation not found with id " + req.params.id
            });
        }
        res.send(valuation);
    }).catch(err => {
        return res.status(500).send({
            message: "Error updating Valuation with id " + req.params.id
        });
    });
})

router.get("/:id",  async(req, res) => {
    Valuation.find({_id: req.params.id}).exec()
    .then(docs => {
        res.status(200).json(docs)
    }).catch(err => {
        res.status(400).json({ error: err })
    })  
  });

router.delete("/:id", async(req, res) => {
    Valuation.findByIdAndRemove(req.params.id)
    .then(valuation => {
        if(!valuation) {
            return res.status(404).send({
                message: "Valuation not found with id " + req.params.id
            });
        }
        res.send({message: "Valuation deleted successfully!"});
    }).catch(err => {

        return res.status(500).send({
            message: "Could not delete Valuation with id " + req.params.id
        });
    });
  });

module.exports = router;