/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

// ✅ Create context
const CartContext = createContext();

// ✅ Provide context
const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem((prev) => [...prev, product]);
  };

  const removeFromCart = (productTitle) => {
    setCartItem((prev) => prev.filter((item) => item.title !== productTitle));
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


export const useCart = () => useContext(CartContext);
