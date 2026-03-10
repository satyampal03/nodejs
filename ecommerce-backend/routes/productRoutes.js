const express = require("express");
const router = express.Router(); // router Functon

const Product = require("../models/Product"); // Product Schema


//  Cloudinary For Image Save on Cloud
const upload = require("../middleware/upload");
const cloudinary = require("../config/cloudinary");

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


// Get single product by id
router.get("/:id", async (req, res) => {
  try {

    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    res.status(400).json({ message: "Invalid product id" });
  }
});

// Add Products to the DataBase
/*
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productSaved = await product.save();

    res.status(201).json(productSaved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
*/

// Add the Products into the store // there is upload.single is the middleware that help us to uplad the image form the frontend

router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";

    // 1. Wrap Cloudinary stream in a Promise so we can 'await' it
    if (req.file) {
      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result.secure_url);
          }
        );
        stream.end(req.file.buffer); // Send the file buffer to Cloudinary
      });
    }

    // 2. Extract stock from req.body (it was missing in your destructuring)
    const { name, price, category, description, stock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      image: imageUrl, // image here
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);

  } catch (error) {
    console.error("Upload Error:", error); // Log the actual error for debugging
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
});




// delete product by id
router.delete("/:id", async (req, res) => {
  try {
    const userRequested_Id = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(userRequested_Id);

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
    const product_Id = req.params.id;
    
    const updated = await Product.findByIdAndUpdate(product_Id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Invalid product id" });
  }
});

module.exports = router;
