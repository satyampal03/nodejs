
const mongoose = require('mongoose');

// 1. Updated URL with protocol and explicit IP
const mongoURL = 'mongodb://127.0.0.1:27017/school';

// 2. Setup the connection (Removed deprecated options)
mongoose.connect(mongoURL); 

/* mongoose.connect(mongoURL, {  
     useNewUrlParser : true,
     useUnifiedTopology: true,
 })
*/ // these lines are now no longer supporte in node js

const db = mongoose.connection;

// 3. Event listeners
db.on('connected', () => {
    console.log('Database connection established successfully');
});

db.on('disconnected', () => {
    console.log('Disconnected Database');
});

// Added 'err' parameter to log the actual issue
db.on('error', (err) => {
    console.error('Database connection error:', err);
});

module.exports = db;











// const mongoose = require('mongoose'); // this is the brigde between the backend server and the database server

// //  Define the mongo db connection

// const mongoURL = 'mongodb://127.0.0.1:27017/school'; // replace database with you'r database name;

// // setup the mongodb connection;

// mongoose.connect(mongoURL, {
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
// }) // these are the require file for stable the connnection

// // get the default connection
// // mongoes maintains a default connection object that representing the mongo db connection.

// const db = mongoose.connection;

// // define the event listners for the data base connection,
// db.on('connected', ()=> {
//     console.log('database connection stablished successful');
// });

// db.on('disconnected', ()=> {
//     console.log('disconnected database server');
// });

// db.on('error', ()=> {
//     console.log('database connection facing error');
// });

// // export the database connection
// module.exports = db;