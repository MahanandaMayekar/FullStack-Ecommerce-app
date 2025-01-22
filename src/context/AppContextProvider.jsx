import CombinedProvider from './CombinedContext';
import { ShopContextProvider } from './ShopContext';



export const AppContextProvider = CombinedProvider(ShopContextProvider);
