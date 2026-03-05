
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <h2 className="cart-title">Your cart is empty</h2>
                <Link to="/" className="btn-primary">Go back to shop</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2 className="cart-title">Your Cart</h2>
            <div className="cart-list">
                {cart.map((p) => (
                    <div key={p._id} className="cart-card">
                        <div className="cart-info">
                            <h4 className="item-name">{p.name}</h4>
                            <p className="item-price">Price: <span>${p.price}</span></p>
                            <p className="item-category">Category: {p.category}</p>
                        </div>

                        <div className="cart-controls">
                            <div className="quantity-toggle">
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(p._id, p.quantity - 1)}
                                    disabled={p.quantity === 1}
                                >-</button>
                                <span className="qty-value">{p.quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => updateQuantity(p._id, p.quantity + 1)}
                                >+</button>
                            </div>

                            <button
                                className="remove-link-btn"
                                onClick={() => removeFromCart(p._id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3 className="total-amount">Total: ${total.toFixed(2)}</h3>
                <div className="cart-actions">
                    <Link to="/" className="btn-secondary">Continue Shopping</Link>

                    <Link to="/checkout">
                        <button className="btn-primary">Proceed to Checkout</button>
                    </Link>
                </div>
            </div>


        </div>



    );
};

export default Cart;
