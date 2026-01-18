const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    age:{
        type:Number
    },

    gender:{
        type :String,
        enum : ['male', 'female', 'other'],
        required:true
    },
     mobile: {
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const SchoolStudents = mongoose.model('abd', studentsSchema); // abd is the collection name here

module.exports = SchoolStudents; // this name should be same as  the file name;
