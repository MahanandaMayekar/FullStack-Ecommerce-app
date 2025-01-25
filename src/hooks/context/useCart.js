import CartItemsContext from '@/context/CartItemsContext'
import React, { useContext } from 'react'

const useCart = () => {
  return useContext(CartItemsContext)
}

export default useCart
