import { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext  = createContext();

const CartProvider = ({ children }) => {

   const [cart, setCart] = useState(() => {

    // Load cart from localStorage if exists
    const savedCart = localStorage.getItem("Customer Shoping Cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

    useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("Customer Shoping Cart", JSON.stringify(cart));
  }, [cart]);


 // Checking if existing 
  const addToCart = (product) => {
    const existing = cart.find(p => p._id === product._id);

    if (existing) {
      const newCart = cart.map(p =>
        p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
      );

      setCart(newCart);

    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 // updating the quantity
   const updateQuantity = (productId, quantity) => {
    const newCart = cart.map(p =>
      p._id === productId ? { ...p, quantity } : p
    );
    setCart(newCart);
  };

  // Remove Product From anyWhere
const removeFromCart = (productId) => {
    const newCart = cart.filter(p => p._id !== productId);
    setCart(newCart);
  };

  console.log('===> Total Carts',cart.length);

  return (
    <CartContext.Provider value={{ cart, setCart , addToCart,updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;