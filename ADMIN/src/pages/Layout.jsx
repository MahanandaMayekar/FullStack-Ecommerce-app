import LoginContainer from '@/components/Login/LoginContainer';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useAuth } from '@/hooks/useAuth';
import React, { useState } from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  const{auth}=useAuth()
  return (
    <div className="flex flex-col h-screen">
      {auth.token === null ? (
        <LoginContainer />
      ) : (
        <>
          <Navbar />

          <div className="flex flex-1">
            <div className="sm:w-64 w-28 ">
              <Sidebar />
            </div>

            <div className="flex-1  overflow-auto  sm:ml-20 mt-28 sm:mr-6 mr-1">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
