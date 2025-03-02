import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import useCart from '@/hooks/context/useCart';
import useUpdateProductQtyInCart from '@/hooks/cart/useUpdateProductQtyInCart';


const CartContainer = () => {
  const { updateQtyInCartMutation, isPending } = useUpdateProductQtyInCart();
  const [cartData, setCartData] = useState([]);
  const { cartItems, setCartItems } = useCart();
if(isPending)return
  useEffect(() => {
    const tempData = [];

    // Loop through all items in cartItems
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    {
/**const cartItems = {
  101: { small: 2, large: 0 },
  102: { medium: 3 },
}; */
    }

    // Update the cartData state
    setCartData(tempData);
  
    
  }, [cartItems]);
  const updateProductQuantityInCart = async(productId, size,quantity) => {
    const updatedCartItems = { ...cartItems }; // Clone the cartItems object
    updatedCartItems[productId][size]=quantity

    setCartItems(updatedCartItems); // Update the state with the modified cart items
    await updateQtyInCartMutation({ productId, size, quantity });
  };

  return (
    <Cart
      cartData={cartData}
      updateProductQuantityInCart={updateProductQuantityInCart}
      isPending={isPending}
    />
  );
}

export default CartContainer
