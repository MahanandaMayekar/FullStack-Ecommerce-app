import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { AppContextProvider } from './context/AppContextProvider';
import { ToastContainer } from "react-toastify";
 import {
   QueryClient,
   QueryClientProvider,
 } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]">
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <ToastContainer />
            <AppRoutes />
          </AppContextProvider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App
