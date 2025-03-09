import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import useCart from '@/hooks/context/useCart';
import useUpdateProductQtyInCart from '@/hooks/cart/useUpdateProductQtyInCart';


const CartContainer = () => {
  const { updateQtyInCartMutation, isPending } = useUpdateProductQtyInCart();
  const [cartData, setCartData] = useState([]);
  const { cartItems, setCartItems } = useCart();

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
  if (isPending) {
    return <p className="text-center py-10 text-gray-700">Loading...</p>;
  }
  if (cartData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 p-6 text-center">
        <div className="bg-white shadow-md rounded-xl p-6 w-80">
          <p className="text-3xl">🛍️</p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            No orders yet
          </p>
          <p className="text-gray-500 mt-1">
            Start shopping and add products to your cart.
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <Cart
      cartData={cartData}
      updateProductQuantityInCart={updateProductQuantityInCart}
      isPending={isPending}
    />
  );
}

export default CartContainer
