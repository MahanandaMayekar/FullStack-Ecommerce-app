import { useAssets } from '@/hooks/assets/useAssets';
import React from 'react'



const Hero = () => {
    const{assets}=useAssets()
  return (
    <div className="flex flex-col  sm:flex-row border border-gray-500 m-2">
      <div className="flex  items-center justify-center w-full sm:w-1/2 gap-3 p-6">
        <div className=" text-black flex gap-4 flex-col">
          <div className="flex items-center gap-3">
            <p className="w-8 md:w-12 h-[2px] bg-black"></p>
            <p>OUR BEST SELLERS</p>
          </div>
          <h1 className="text-3xl lg:text-5xl prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-5">
            <p>SHOP NOW</p>
            <p className="w-8 md:w-12 h-[2px] bg-black"></p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <img src={assets.hero_img}  />
      </div>
    </div>
  );
}

export default Hero
