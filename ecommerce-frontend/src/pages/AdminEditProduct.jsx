    import React, { useState } from 'react'
    import { useParams } from 'react-router-dom'

    import { useEffect } from 'react';

    const API = import.meta.env.VITE_API_URL

   const AdminEditProduct = () => {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

useEffect(() => {

    fetch(`${API}/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setDescription(data.description);
      });

  }, [id]);

 const handleSubmit = async (e) => {

  e.preventDefault();

  const updatedProduct = {
    name,
    price,
    category,
    description
  };

  try {

    const res = await fetch(`${API}/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    });

    if(res.ok){
      alert("Product Updated!");
    }

  } catch (error) {
    console.log("Update Error:", error);
  }
};

      return<>
            <div className="form-container">
  <h2 className="form-title">Edit Product</h2>

  <form onSubmit={handleSubmit} className="product-form">
    <div className="input-group">
      <label>Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />
    </div>

    <div className="input-row">
      <div className="input-group">
        <label>Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <div className="input-group">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Electronics"
        />
      </div>
    </div>

    <div className="input-group">
      <label>Description</label>
      <textarea
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the product features..."
      />
    </div>

    <button type="submit" className="submit-btn">
      Update Product
    </button>
  </form>
</div>

      </>
      
    }

export default AdminEditProduct