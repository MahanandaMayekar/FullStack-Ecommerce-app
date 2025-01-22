import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { AppContextProvider } from './context/AppContextProvider';

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw]">
        <AppContextProvider>
          <AppRoutes />
        </AppContextProvider>
      </div>
    </>
  );
}

export default App
