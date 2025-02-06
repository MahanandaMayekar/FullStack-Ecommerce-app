import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-64 ">
          <Sidebar />
        </div>

        <div className="flex-1  overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
