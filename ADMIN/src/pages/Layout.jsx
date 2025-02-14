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
      {auth.token ===null ? (
        <LoginContainer />
      ) : (
        <>
          <Navbar />

          <div className="flex flex-1">
            <div className="w-64 ">
              <Sidebar />
            </div>

            <div className="flex-1  overflow-auto">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
