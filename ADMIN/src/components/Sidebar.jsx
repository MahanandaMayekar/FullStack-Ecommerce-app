import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "@/assets/assets";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";



const Sidebar = () => {
  return (
    <div className="w-[18%] h-screen bg-gray-100/55 border-r border-gray-300 p-5 shadow-md mt-20 fixed">
      <div className="flex  flex-col gap-3 ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NavLink
                to={"/add"}
                className="flex gap-4 items-center justify-center sm:justify-start border-2 w-full p-2"
              >
                <img src={assets.add_icon} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-l hidden sm:block ">
                  Add Products
                </p>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add Products</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
            
              <NavLink
                to={"/list"}
                className="flex gap-4 items-center justify-center sm:justify-start border-2 w-full p-2"
              >
                <img src={assets.order_icon} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-l  hidden sm:block ">
                  List items
                </p>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>List items</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
             
              <NavLink
                to={"/orders"}
                className="flex gap-4 items-center justify-center sm:justify-start border-2 w-full p-2"
              >
                <img src={assets.cart_icon} alt="" className="w-5 h-5" />
                <p className="text-sm sm:text-l  hidden sm:block ">Orders</p>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>Orders</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Sidebar;
