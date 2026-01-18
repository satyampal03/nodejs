const mongoose = require('mongoose');

// Menue Structure schema

const menuItemSchema = new mongoose.Schema({
     name:{
        type : String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    taste:{
        type :String,
        enum : ['sweet', 'spicy', 'sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default: false,
    },
    ingredients:{
        type:String,
        default:[]
    },
    num_sales:{
        type:Number,
        dafault:0,
    },
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;




// const mongoose = require('mongoose');

// // defining Schema 
// const menuItemSchema = new mongoose.Schema({
//     name:{
//         type : String,
//         required: true
//     },
//     price:{
//         type: Number,
//         required: true,
//     },
//     taste:{
//         type :String,
//         enum : ['sweet', 'spicy', 'sour'],
//         required:true
//     },
//     is_drink:{
//         type:Boolean,
//         default: false,
//     },
//     ingredients:{
//         type:String,
//         default:[]
//     },
//     num_sales:{
//         type:Number,
//         dafault:0,
//     },

// })

// const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// module.exports = MenuItem;