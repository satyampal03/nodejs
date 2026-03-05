import React from 'react'
import { Link } from "react-router-dom";


const ProductList = ({data}) => {

  return <>
    <div className="container">
  <h2 className="title">Products from Backend</h2>
  <div className="product-grid">
    {data.map((p) => (
      <div key={p._id} className="product-card">
        {/* <h4 className="product-name">{p.name}</h4> */}

         <h4>
            <Link to={`/products/${p._id}`}> {p.name}</Link>
          </h4>

        <div className="product-details">
          <p><strong>Price:</strong> ${p.price}</p>
          <p><strong>Category:</strong> {p.category}</p>
          <p className="description">{p.description}</p>

          <button className="add_to_cart">Add to Cart</button>

        </div>
        <div className="product-footer">
          <span>Stock: {p.stock}</span>
          <small>Updated: {new Date(p.updatedAt).toLocaleDateString()}</small>
        </div>
      </div>
    ))}
  </div>
</div>

  </>
}

export default ProductList