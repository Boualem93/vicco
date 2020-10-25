const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

//get a complete list of trainers 
router.get('/', (req,res) => {
    res.send('This is the list of trainers');
});
//get a particular trainer 
router.get('/trainer', (req,res) => {
    res.send('This is a Oussama');
});
//post a new trainer
router.post('/add', (req,res) => {
    //Create a new trainer instance based on the body
    const trainer = new Trainer({
        email:req.body.email,
        name:req.body.name,
        surname:req.body.surname,
        password:req.body.password,
        dateOfBirth:req.body.dateOfBirth,
        bio:req.body.bio,
        priceSession:req.body.priceSession,
        profilePictureReference:req.body.profilePictureReference,
        gender:req.body.gender,
        rib:req.body.rib,
        languages:req.body.languages,
        reviews: req.body.reviews,
        tags:req.body.tags
    })
    trainer.save()
            .then(data => {
                res.json(data)
    }).catch(err => {
        res.json({message:err});
    });
});
//exporting the route
module.exports = router;