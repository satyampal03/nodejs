const mongoose = require('mongoose');
   

const orderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  email: String,
  phone: String,

  products: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ],

  total: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Orders', orderSchema);
