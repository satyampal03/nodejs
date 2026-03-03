mkdir ecommerce-backend
cd ecommerce-backend
-----------------------------------------------
npm init -y
-----------------------------------------------
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon 

express → Backend framework
mongoose → Connect to MongoDB
dotenv → Environment variables (like DB URI, secret keys)

cors → Allow frontend to communicate with backend 

bcryptjs → Encrypt user passwords
jsonwebtoken → For login authentication
nodemon → Auto-restart server on code change

-----------------------------------------

Create a server file
Create a file named server.js and add:

------------------------------------------
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// ✅ middleware
app.use(cors());
app.use(express.json());
const app = express();
const PORT = process.env.PORT || 3030;
app.get("/", (req, res) => {
  res.send("Server is Running");
});
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});


👉 This starts the server.

app.use(express.json());

👉 Allows your server to read JSON body.

{ "email": "...", "password": "..." }

your backend can read it.


app.use(cors());
👉 Allows your React frontend (different port)
to call this backend.


