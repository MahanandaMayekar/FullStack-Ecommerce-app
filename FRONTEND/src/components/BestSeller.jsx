import React, { useEffect, useState } from "react";
import Title from "./Title";
import LatestProductItem from "./LatestProductItem";
import useFetchAllProducts from "@/hooks/products/useFetchAllProducts";

const BestSeller = () => {
  const { productList } = useFetchAllProducts();
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    if (!productList) return;

    const bestproducts = productList.filter((item) => item.bestSeller);
    setBestSeller(bestproducts.slice(0, 5));
  }, [productList]);
  return (
    <div className="m-5 my-10">
      <div className="py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto p-3 text-sm  md:text-base text-wrap px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          laboriosam nobis magni nemo quam
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
        {bestSeller.map((item) => (
          <LatestProductItem
            key={item._id} // Add a unique key here
            productId={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
