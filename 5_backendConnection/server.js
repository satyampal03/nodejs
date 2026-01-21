const express = require('express');

const app = express();

const db = require('./db');

// DOTENV File Extrecting
require('dotenv').config();

const bodyParser =  require('body-parser');
const { error } = require('node:console');
app.use(bodyParser.json());

app.use('/', function(req,res){
    res.send('you can acces ~ WELCOME MY WORLD');
})

const studentRoutes = require('./routes/studentsRoute')

app.use('/student',studentRoutes );

// DOTENV PORT  Extrecting ~  
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is responding on 4000 Port');
});