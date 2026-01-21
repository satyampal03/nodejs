const mongoose = require('mongoose'); // driver mongoose

// DOTENV FILE EXTRECTING 
require('DB_URL').config();
const DB_URL = process.env.DB_URL;

// const mongoURL = 'mongodb://127.0.0.1:27017/school'; // mongodb url
const mongoURL = DB_URL; // online database server address

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