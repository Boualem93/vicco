const express = require('express');
const router = express.Router();

//get the complete list of sessions 
router.get('/', (req,res) => {
    res.send('This is the list of sessions');
});

//get a particular session
router.get('/session', (req,res) => {
    res.send('This is a session');
});

//exporting the route 
module.exports = router;