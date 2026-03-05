import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from "./pages/ProductDetails";

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
        <Route  path="/" element={<ProductList data={products}/>} />
        <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </>
}

export default App;