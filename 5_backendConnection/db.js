const mongoose = require('mongoose'); // driver mongoose

const mongoURL = 'mongodb://127.0.0.1:27017/school'; // mongodb url

mongoose.connect(mongoURL); // connection  setup

const db = mongoose.connection; // 

db.on('connected', ()=>{
    console.log('Database server Connected to the backend server');
});

db.on('disconnected', ()=>{
    console.log('Database server disconnected to the backend server');
});

db.on('erroe', ()=>{
    console.log('Database connection facing Error');
});

module.exports = db;