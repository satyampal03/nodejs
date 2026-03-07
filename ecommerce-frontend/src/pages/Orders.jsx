// import { setDriver } from 'mongoose';
import React, { useEffect, useState } from 'react'
const API = import.meta.env.VITE_API_URL


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${API}/api/orders`)
      .then(res => res.json())
      .then(data => setOrders(data));


     setLoading(false)

  }, []);

    if (loading) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Fetching your orders...</p>
    </div>
  );
}

    return  <>
        <div className="order-history-container">
            <h2 className="page-title">Order History</h2>

            {orders.map((order) => (
                <div key={order._id} className="order-card">
                    <div className="order-header">
                        <div className="client-info">
                            <h4>{order.customerName}</h4>
                            <p className="client-details">
                                <span>{order.phone}</span> • <span>{order.email}</span>
                            </p>
                            <p className="address"><strong>Ship to:</strong> {order.address}</p>
                        </div>
                        <div className="order-meta">
                            <span className="status-badge">Completed</span>
                        </div>
                    </div>

                    <div className="product-list">
                        <h5>Items Ordered</h5>
                        {order.products.map((p, i) => (
                            <div key={i} className="product-item">
                                <span className="product-name">{p.name}</span>
                                <span className="product-calc">
                                    ${p.price} × {p.quantity}
                                </span>
                                <span className="product-subtotal">${(p.price * p.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="order-footer">
                        <span className="total-label">Total Amount</span>
                        <span className="total-amount">${order.total}</span>
                    </div>
                </div>
            ))}
        </div>

    </>
  
}

export default Orders