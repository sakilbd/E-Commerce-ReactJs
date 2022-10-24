import { useContext } from "react";
import { createContext } from "react";


const CartContext = createContext()

export function useCartContext(){
    return useContext(CartContext);
}

const CartProvider = ({children}) =>{
    return <CartContext.Provider value="BOom BoOm">{children}</CartContext.Provider>
}

export {CartContext,CartProvider};