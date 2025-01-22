import { useAssets } from '@/hooks/assets/useAssets';
import { createContext } from "react";


const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
    const { products } = useAssets() 
    const currency = '$'
    const delivery_fee=10

    return (
      <ShopContext.Provider value={{ products, currency, delivery_fee }}>
        {children}
      </ShopContext.Provider>
    );
};

export default ShopContext;
