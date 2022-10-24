import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();
export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  let [data, setdata] = useState("hurrah ");
    
  const insertItem = (id) => {
    setdata(id);
  };
  const getItem = () => {
    return data;
  };
  return (
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
