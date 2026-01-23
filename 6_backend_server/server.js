// This file is Containing the Backend

const express = require('express');
const app = express();
const db = require('./db');
const userSchema = require('./module/userSchema');
// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.send('/user', async(req, res)=>{

})
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(req.body);
});

app.get('/name', function(req, res){
    res.send('My Name Is Satyam Pal');
});

app.listen(3000,()=>{
    console.log('Sever Runnig on the port No - 3000');
});