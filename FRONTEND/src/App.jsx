import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { AppContextProvider } from './context/AppContextProvider';
 import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]">
        <AppContextProvider>
          <ToastContainer />
          <AppRoutes />
        </AppContextProvider>
      </div>
    </>
  );
}

export default App
