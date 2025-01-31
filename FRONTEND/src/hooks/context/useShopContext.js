import ShopContext from '@/context/ShopContext'
import { useContext } from 'react'

export const useShopContext = () => {
    return useContext(ShopContext)
}