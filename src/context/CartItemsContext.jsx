import { createContext, useState } from 'react'


const CartItemsContext = createContext()

export const CartItemsContextProvider = ({ children }) => {

    const[cartItems,setCartItems]=useState({})

    return (
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartItemsContext.Provider>
    );
   
    
}



export default CartItemsContext;