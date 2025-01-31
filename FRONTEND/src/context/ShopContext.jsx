import { createContext, useState } from "react";


const ShopContext = createContext();
export const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("")
  const[showsearchBar,setShowsearchBar]=useState(null)
    const currency = '$'
    const delivery_fee=10

    return (
      <ShopContext.Provider
        value={{      
          currency,
          delivery_fee,
          search,
          setSearch,
          showsearchBar,
          setShowsearchBar,
        }}
      >
        {children}
      </ShopContext.Provider>
    );
};

export default ShopContext;
