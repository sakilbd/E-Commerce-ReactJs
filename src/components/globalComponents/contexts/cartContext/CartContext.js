import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();
export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  let [data, setdata] = useState(1);
    
  const insertItem = (id) => {
   
    setdata(id);
  };
  const getItem = () => {
    return data;
  };
  const value = {data,insertItem};
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
