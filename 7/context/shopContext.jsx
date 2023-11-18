// shopContext.jsx
import { createContext, useState, useContext } from 'react';

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;


