import React from "react";
import { assets } from "@/assets/assets";
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const{Logout}=useAuth()
  return (
    <div className="flex items-center justify-between px-10 h-20 shadow-md bg-white fixed top-0 left-0 w-full">
      <img src={assets.logo} className="w-40" alt="Logo" />

      <button className="bg-black text-white px-4 py-2 rounded-md transition duration-300 hover:bg-gray-800 active:bg-gray-700" onClick={()=>Logout()}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
