const mongoose = require('mongoose');
const Module = require('node:module');
const mongoURL = ' mongodb://127.0.0.1:27017/demo'
mongoose.connect(mongoURL);
const db = mongoose.connection

// Dataabase Events [connected, disconnected, error]
db.on('connected', ()=>{
    console.log('Database is Connected');
});
db.on('disconnected', ()=>{
    console.log('Database is Disconnected');
});
db.on('error', ()=>{
    console.log('Database facing Error')
});

module.exports = db;