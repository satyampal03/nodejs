const express = require('express');

const app = express();

const db = require('./db');


const bodyParser =  require('body-parser');
const { error } = require('node:console');
app.use(bodyParser.json());


const studentRoutes = require('./routes/studentsRoute')

app.use('/student',studentRoutes );

app.listen(4000, ()=>{
    console.log('Server is responding on 4000 Port');
});