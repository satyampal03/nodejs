const express = require("express");
const cors = require("cors"); // allow frontend to connect with the backend

const mongoose = require("mongoose");

require("dotenv").config(); // connection with env File

const productRoutes = require('./routes/productRoutes');
const orderRouted = require('./routes/orderRoutes');

const app = express(); // express function

// ✅ middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3030;

// Default
app.get("/", (req, res) => {
  res.send("Server is ==> Running");
});


// end-points get routed with same api/products routes
app.use("/api/products", productRoutes);

// Orders Route 
app.use('/api/orders', orderRouted);

//MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(`Mongo Error: ${err}`);
  });

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
