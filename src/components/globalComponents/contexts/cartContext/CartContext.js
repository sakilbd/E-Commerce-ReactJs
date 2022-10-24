import { createContext } from "react";


const CartContext = createContext()

const CartProvider = ({children}) =>{
    return <CartContext.Provider value="BOom BoOm">{children}</CartContext.Provider>
}

export {CartContext,CartProvider};