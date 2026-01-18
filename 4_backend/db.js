const mongoose = require('mongoose');
const { model } = require('mongoose');

// mongose URL with define a database name

const mongoURL = `mongodb://127.0.0.1:27017/demo`;

// setup the connection 

mongoose.connect(mongoURL);


const db = mongoose.connection;

// db events such as the (on connected, on error, on disconnected);

db.on('connected', ()=>{
    console.log('Connection Stablished successful');
});

db.on('disconnected', ()=>{
    console.log('Database disconnectied');
});

db.on('error', ()=>{
    console.log('Databases serverside error');
});

module.exports = db;