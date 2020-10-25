const express = require('express');
const router = express.Router();

//get a complete list of trainees 
router.get('/', (req,res) => {
    res.send('This is the list of trainees');
});
//get a particular trainee
router.get('/trainee', (req,res) => {
    res.send('This is a Jef');
});

//exporting the router 
module.exports = router;