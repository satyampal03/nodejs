const express = require('express');
const router = express.Router(); // router Functon

const Product = require("../models/Product"); // Product Schema


// Get Products From DatabaseS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Faild to Fetch Products" });
    console.log("Server Side Error Produt API");
  }
});


// Add Products to the DataBase
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productSaved = await product.save();

    res.status(201).json(productSaved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Fined a Product From the Database
router.get("/:id", async (req, res) => {
  try {
    const userRequestId = req.params.id;

    const response = await Product.findById(userRequestId);

    if (!response) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(response);
  } catch (err) {
    res.status(400).json({ message: "Invalid id" });
  }
});

// delete product by id
router.delete("/:id", async (req, res) => {
  try {
    const userRequestedId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(userRequestedId);

    if (!deletedProduct) {
      res.status(404).json({ message: "Product Not Found" });
    }

    res.json({ message: "Product Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: "Invalid Product Id" });
  }
});



// Update product 
router.put("/:id", async (req, res) => {
  try {

    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);
    
  } catch (error) {
    res.status(400).json({ message: "Invalid product id" });
  }
});

module.exports = router;