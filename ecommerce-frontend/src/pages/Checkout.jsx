import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL



const Checkout = () => {

    const { cart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('')
    const [orderPlaced, setOrderPlaced] = useState(false);

    const total = cart.reduce((sum, p) => {
        return (sum + p.price * p.quantity)
    }, 0)

    // const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

    console.log('Total CheckOut custumer have to pay====> ', total);



    // Sending data to the backend

    // const handleOrder = () => {
    //     if (!name || !address || !phoneNumber || !email) {
    //         alert("Please fill all fields");
    //         return;
    //     }
    //     setOrderPlaced(true);
    // };

    const handleOrder = async () => {
        if (!name || !address || !phoneNumber || !email) {
            alert("Please fill all fields");
            return;
        }

        const orderData = {
            customerName: name,
            email: email,
            phone: phoneNumber,
            address: address,
            products: cart,
            total: total
        }


        try {
            const res = await fetch(`${API}/api/orders`, { // fetch tells the browser: "Go to this specific address
                method: "POST", // By default, browsers just "GET" (ask for) data. By saying "POST", you are telling the server: "I am giving you something new to save."

                headers: {
                    "Content-Type": "application/json"  // "Warning: Contents are in JSON format."
                },

                body: JSON.stringify(orderData) // orderData is your JavaScript object (the name, address, etc.).
            });

            const data = await res.json();

            // console.log("Order Saved:", data);

            setOrderPlaced(true);

        } catch (err) {
             console.log("Order Error:", err);
        }


    }


    if (orderPlaced) {
        return (
            <div className="order-success-container">
                <div className="success-icon">✓</div>
                <h2>Order Placed Successfully!</h2>
                <p>Thank you for your purchase. We've sent a confirmation email to {email}.</p>
                <Link to="/" className="btn-primary">Return to Home</Link>
            </div>
        );
    }


    return <>

        <div className='CheckOut_Container'>
            <h2 className="cart-title">Checkout Details</h2>

            <div className='customer_form'>
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email Address</label>
                <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Phone Number</label>
                <input
                    type="tel"
                    placeholder="e.g., +1 234 567 890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <label>Shipping Address</label>
                <textarea
                    placeholder="Enter your full street address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>

            <div className="checkout-summary">
                <p>Total Items: {cart.length}</p>
                <button className="btn-primary" onClick={handleOrder}>
                    Place Order Now
                </button>
            </div>
        </div>
    </>
}


export default Checkout