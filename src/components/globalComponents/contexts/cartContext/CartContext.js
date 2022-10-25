import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();
export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const c = console.log.bind(console);
  let [cartItems, setCartItems] = useState([]);

  const insertItem = (id) => {
    console.log(cartItems);
    setCartItems([...cartItems, { id: id, quantity: id + 1 }]);
    // setdata(id);
  };
  const getItem = () => {
    // return data;
  };

  const getItemQuantity = (id) => {
    // return id;
    return cartItems.find(item => item.id === id)?.quantity||0;
  };
  const increaseCartQuantity = (id) => {
    c("inside increaseCartQuantity");
    setCartItems((currItems) => {
      // c((currItems.find((item) => item.id == id))==null);
      if (currItems.find((item) => item.id == id)==null) {
        return [...currItems, { id:id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cartItems);
  };

  const decreaseCartQuantity = (id) => {
   
    setCartItems((currItems) => {
      // c((currItems.find((item) => item.id == id))==null);
      if (currItems.find((item) => item.id == id)?.quantity===1) { 
        return currItems.filter(item=>item.id!==id);
      } else {
        return currItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    
  };
  const removeFromCart = (id) => { 
    setCartItems((currItems) => {
     return currItems.filter(item=>item.id!=id);
    });
    console.log(cartItems);
  };
  const value = { getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
