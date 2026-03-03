const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require('./models/Product'); // Product Schema


const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3030;

// Default 
app.get("/", (req, res) => {
  res.send("Server is ==> Running");
});

// Get Products From DatabaseS
app.get('/api/products', async(req, res)=>{
    try{

    const products = await Product.find();
    res.json(products);
    }catch(err){
        res.status(500).json({message: 'Faild to Fetch Products'})
        console.log('Server Side Error Produt API')
    }
})

// Add Products to the DataBase
app.post('/api/products', async(req, res)=>{
    try{
        const product = new Product(req.body);
        const productSaved = await product.save();

        res.status(201).json(productSaved);
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

// Fined a Product From the Database
app.get('/api/products/:id', async(req, res)=>{
    try{}catch(err){
        res.status(400).json({message: 'Invalid id'})
    }
})

// ✅ MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
    console.log('MongoDB Connected Successfully');
})
    .catch((err)=>{
        console.log(`Mongo Error: ${err}`);
    });

 


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
