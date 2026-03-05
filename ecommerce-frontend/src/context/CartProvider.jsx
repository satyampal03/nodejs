import { createContext, useState } from "react";

export const CartContextGlobal = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContextGlobal.Provider value={{ cart, addToCart }}>
      {children}
    </CartContextGlobal.Provider>
  );
};

export default CartProvider;