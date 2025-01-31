import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartItemsContext = createContext();

export const CartItemsContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [ProductSize, setProductSize] = useState("");

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select Product size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }
    setCartItems(cartData);
    toast.success("Product added to Cart")
    console.log('cart items',cartItems);
    
  };

  const getTotalProductsInCart = () => {
    let totalCount = 0;
    for (let productId in cartItems) {
      let productsSizes = cartItems[productId];
      //console.log("'product sizes", productsSizes);
      {
        /**
                 * 
                 * const cartItems = {
            "product1": { S: 2, M: 1 }, // Product 1: 2 small, 1 medium
            "product2": { L: 3 },       // Product 2: 3 large
          }; */
      }

      for (let sizes in productsSizes) {
        totalCount += productsSizes[sizes];
      }
    }
    return totalCount;
  };

  return (
    <CartItemsContext.Provider
      value={{ cartItems, setCartItems, addToCart, getTotalProductsInCart,ProductSize, setProductSize }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsContext;
