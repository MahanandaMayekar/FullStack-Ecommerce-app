import Title from '@/components/Title'
import { useAssets } from '@/hooks/assets/useAssets'
import { useShopContext } from '@/hooks/context/useShopContext'
import React from 'react'

const Orders = () => {
  const { currency } = useShopContext()
  const{products}=useAssets()
  return (
    <div className=" border-t pt-20  sm:w-full">
      <div className="">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(0, 5).map((product, index) => (
          <div
            className="flex sm:gap-10 gap-4 sm:justify-between item-center border-b border-t pb-4 sm:w-full flex-col sm:flex-row"
            key={index}
          >
            <div className="flex gap-6">
             
                <img
                  src={product.image[0]}
                  className="w-20 sm:w-32 object-contain mt-4"
                  alt=""
                />
            
              <div className="flex flex-col mt-4 gap-2 justify-center ">
                <p className="font-bold">{product.name}</p>
                <div className="flex flex-row gap-6 text-[12px] sm:text-lg truncate">
                  <p>
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity : 3</p>
                  <p>Size: M</p>
                </div>
                <p className="text-sm text-gray-600">
                  Date: {Date().slice(0, 15)}
                </p>
              </div>
            </div>

            <div className=" flex justify-center items-center gap-3">
              <p
                className={`min-w-3.5 h-3.5  rounded-full border-2 pl-2 bg-green-500
                  
                }`}
              ></p>
              <p className="text-muted-foreground h-6 sm:pb-4  truncate">
                Ready to ship
              </p>
            </div>
            <div className=" flex justify-center items-center gap-3  ">
              <button
                onClick={() => navigate("")}
                className="bg-slate-300 text-black font-bold text-sm sm:text-md p-3 rounded-sm active:bg-slate-700/55 truncate hover:bg-slate-500/55 "
              >
                TRACK YOUR ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders
