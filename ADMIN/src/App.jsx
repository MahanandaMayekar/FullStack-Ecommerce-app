import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './context/AppContextProvider';


const App = () => {
   const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <AppRoutes />
          <ToastContainer />
        </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App
