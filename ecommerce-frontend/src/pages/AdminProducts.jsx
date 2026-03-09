import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL

export default function AdminProducts() {

      const [products, setProducts] = useState([]);


      // Fetching the All Listed Products
  const fetchProducts = () => {
    fetch(`${API}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);



// Deleting Product and again fetching  function calls
  const deleteProduct = async (id) => {

    const confirmDelete = confirm("Delete this product?");
    if (!confirmDelete) return;

    await fetch(`${API}/api/products/${id}`, {
      method: "DELETE"
    });

    fetchProducts(); 
  };


  // Edit Product and Fetch again 

  // const editPoduct = async (id) => {

  //   const confirmDelete = confirm("Delete this product?");
  //   if (!confirmDelete) return;

  //   await fetch(`${API}/api/products/${id}`, {
  //     method: "DELETE"
  //   });

  //   fetchProducts(); 
  // };






  
  return <>
 <div className="admin-layout">
      {/* Sidebar for navigation/stats */}
      <aside className="admin-sidebar">
        <div className="logo-section">
          <div className="logo-icon">A</div>
          <h2>AdminPanel</h2>
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">📦 Products</div>
          <div className="nav-item">📊 Analytics</div>
          <div className="nav-item">👤 Users</div>
        </nav>
        <div className="stats-card">
          <p>Total Inventory</p>
          <h3>{products.length} Items</h3>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="main-header">
          <h1>Product Management</h1>
          <Link to="/admin/products"><button className="add-btn" >+ Add New Product</button></Link>
          
        </header>

        <div className="product-grid">
          {products.map((p) => (
            <div key={p._id} className="product-card">
              <div className="card-top">
                <span className={`badge ${p.category}`}>{p.category}</span>
                <span className="stock-count">Stock: {p.stock}</span>
              </div>
              
              <div className="card-body">
                <h4>{p.name}</h4>
                <p className="description">{p.description}</p>
                <div className="price-tag">${p.price}</div>
              </div>

              <div className="card-actions">
               <Link to={`/admin/edit-product/${p._id}`}> <button className="edit-link" >Edit</button> </Link> 
                <button 
                  className="delete-btn" 
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
      </>
}
