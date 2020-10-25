const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//Import routes
const trainersRoute = require ('./routes/trainers');
const traineesRoute = require ('./routes/trainees');
const sessionsRoute = require ('./routes/sessions');


//Middlewares
app.use(bodyParser.json());
app.use('/trainers', trainersRoute);
app.use('/trainees', traineesRoute);
app.use('/sessions', sessionsRoute);

//Routes
app.get('/', (req,res) =>{
    res.send('Hello World');
});

//Connect to mongoDB

mongoose.connect(
            process.env.DB_CONNECTION, 
            { useNewUrlParser: true ,useUnifiedTopology: true },
            () => console.log('connected to DB')
);
//Listen to server
app.listen(3000);
