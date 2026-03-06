const express = require("express");

const router = express.Router();

const order = require("../models/Order");

//Create the Order
router.post("/", async (req, res) => {
  try {
    const { customerName, address, email, phone, products, total } = req.body;

    const newOrder = new order({
      customerName,
      address,
      email,
      phone,
      products,
      total,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(505).json({ message: "Order Creation Error" });
  }
});

// Get All orders

router.get('/', async (req, res)=>{
   try{
    
    const orders = await order.find().sort({ createdAt: -1 }); // sorted data comming times

    res.json(orders);


   }catch(err){
    res.status(500).json({message: "Error Fetching Data"})
   }
})

module.exports = router;