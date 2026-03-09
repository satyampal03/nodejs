import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from "./pages/ProductDetails";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminProducts from './pages/AdminProducts';
import AdminEditProduct from './pages/AdminEditProduct';

import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL


const App = () => {

  const [products, setProducts] = useState([]);

  // fetching the data from the backend
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
     }
    })(); 
  }, []);

  console.log(products);

  return <>

    <Routes>
      <Route path="/" element={<ProductList data={products} />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/orders' element={<Orders />} />

      <Route path='/admin' element={<AdminProducts />} />

      <Route path='/admin/products' element={<AdminAddProduct />} />
      <Route path='/admin/edit-product/:id' element={<AdminEditProduct />} />
    </Routes>

    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/cart">Go to Cart</Link>
    </div>

    <div style={{ padding: "50px", borderBottom: "1px solid #ccc" }}>
      <Link to="/orders">Go to Orders </Link>
    </div>

    <div style={{ padding: "50px", borderBottom: "1px solid #ccc" }}>
      <Link to="/admin/products">List Products </Link>
    </div>


    
    <div style={{ padding: "50px", borderBottom: "1px solid #ccc" }}>
      <Link to="/admin">Admin Products </Link>
    </div>
  </>
}

export default App;