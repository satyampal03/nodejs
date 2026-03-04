import React from 'react'
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App = () => {

  const [products, setProducts] = useState([]);


  // useEffect(() => {
  //   fetch("http://localhost:3030/api/products")
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data);
  //     })
  //     .catch(err => { 
  //       console.error(err);
  //     });
  // }, []);

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

console.log(products);

  
  return <>

      <div style={{ padding: "20px" }}>
      <h2>Products from backend</h2>

        <ProductList data={products} />

    </div>
  </>
}

export default App;