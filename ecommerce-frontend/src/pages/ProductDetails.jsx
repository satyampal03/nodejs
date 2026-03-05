import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
     const { id } = useParams();

     console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3030/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  console.log(product);


  if (!product) {
    return <p>Loading...</p>;
  }

  
  return  <div className="detail-container">
  <div className="detail-card">
    <h2 className="detail-title">{product.name}</h2>
    
    <div className="detail-badge-row">
      <span className="badge price-badge">${product.price}</span>
      <span className="badge category-badge">{product.category}</span>
    </div>

    <div className="detail-content">
      <h4 className="section-label">Description</h4>
      <p className="detail-description">{product.description}</p>
    </div>

    <button className="add_to_cart">Add to Cart</button>

  </div>
</div>

  }

export default ProductDetails