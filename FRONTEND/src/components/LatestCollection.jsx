import useFetchAllProducts from "@/hooks/products/useFetchAllProducts";
import { useEffect, useState } from "react";
import { Instagram } from "react-content-loader";
import LatestProductItem from "./LatestProductItem";
import Title from "./Title";

const LatestCollection = () => {
  const { productList, isLoading } = useFetchAllProducts();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (!productList) return; // Stop if productList is undefined

    setLatestProducts(productList.slice(0, 10));
    console.log("product list", productList);
  }, [productList]);

  return (
    <div className="m-5 my-10">
      <div className="py-8">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto p-3 text-sm  md:text-base text-wrap px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          laboriosam nobis magni nemo quam
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
        {isLoading
          ? latestProducts.map((index) => (
              <div key={index} className="flex gap-4">
                <Instagram className="-rotate-180 h-72 scale-x-[-1]" />
              </div>
            ))
          : latestProducts.map((item) => (
              <LatestProductItem
                key={item._id}
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

export default LatestCollection;
