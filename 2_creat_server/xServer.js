const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hey dear');
});

app.get('/call', function(req, res){
    res.send('you called me');
});

app.listen(700, ()=>{
    console.log('Server is runniung on port 700');
});