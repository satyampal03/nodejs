const mongoose = require('mongoose');

const userSchema = new mongoose.scheema({
    name:{
        types: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type :String,
        require :true
    }
});

const userSchemaModule = mongoose.scheema('xTable', userSchema);

module.exports = userSchemaModule;