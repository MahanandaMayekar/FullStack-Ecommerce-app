import { authContextProvider } from './AuthContext';
import CombinedProvider from './CombinedContext';



export const AppContextProvider = CombinedProvider(authContextProvider);
