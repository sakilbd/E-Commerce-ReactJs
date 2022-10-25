import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();
export function useCartContext() {
  return useContext(CartContext);
}

const CartProvider = ({ children }) => {
  const c = console.log.bind(console);
  let [cartItems, setCartItems] = useState([{ id: -1, quantity: -1 }]);

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
    return cartItems.find((item) => {
      c(item);
      if(item.id ==id){
        return item.id;
      }
      return item.id === id?.quantity || 0;
    });
  };
  const increaseCartQuantity = (id) => {
    c("inside increaseCartQuantity");
    setCartItems((currItems) => {
      c(currItems.find((item) => item.id == id) == null);
      if ((currItems.find((item) => item.id == id) == null) == true) {
        return [...currItems, { id: id, quantity: 1 }];
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

  const value = { getItemQuantity, increaseCartQuantity, insertItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
