import { Delete } from "lucide-react";
import React from "react";

const ProductItem = ({ image, name, category, price }) => {
  const currency = "$";
  return (
    <div className="grid  grid-cols-5  items-center gap-4  sm:gap-12 border p-5 mt-2 mb-2 text-xs sm:text-lg ">
      <img src={image} alt="" className="w-16 sm:w-20" />

      <p className=" sm:text-lg font-medium truncate  ">{name}</p>
      <p className=" sm:text-left text-gray-600 ">{category}</p>
      <p className=" sm:text-left font-semibold">
        {currency}
        {price}
      </p>

      <div className="flex justify-center sm:justify-start cursor-pointer ">
        <Delete size={26} />
      </div>
    </div>
  );
};

export default ProductItem;
