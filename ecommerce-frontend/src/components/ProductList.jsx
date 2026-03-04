import React from 'react'


const ProductList = ({data}) => {

  return <>
<div>
        {data.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <h4>{p.name}</h4>
          <p>Price: {p.price}</p>
          <p>Category: {p.category}</p>
          <p>Description: {p.description}</p>
          <p>Total Stock: {p.stock}</p>
          <p>Created_at: {p.createdAt}</p>
          <p>Updated_at: {p.updatedAt}</p>
        </div>
      ))}

      </div>
  </>
}

export default ProductList