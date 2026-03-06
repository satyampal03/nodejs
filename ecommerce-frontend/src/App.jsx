import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import { Link } from "react-router-dom";


const App = () => {

  const [products, setProducts] = useState([]);

  // fetching the data from the backend
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3030/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    })(); // The () here calls it immediately
  }, []);


  return <>

    <Routes>
      <Route path="/" element={<ProductList data={products} />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/orders' element={<Orders />} />
    </Routes>

    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/cart">Go to Cart</Link>
    </div>

        <div style={{ padding: "50px", borderBottom: "1px solid #ccc" }}>
      <Link to="/orders">Go to Orders </Link>
    </div>
  </>
}

export default App;