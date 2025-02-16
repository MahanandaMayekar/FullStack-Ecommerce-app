import ProductItem from '@/components/ProductItem';
import React, { useEffect } from 'react'

const ListProducts = ({ productList }) => {
   useEffect(() => {
     console.log("list===>", productList);
   }, [productList]);
  return (
    <>
      <div className="grid  grid-cols-5 items-center gap-4 border p-2 mt-2 mb-2 text-xs sm:text-lg font-bold bg-slate-100">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
      <div>
        {productList?.map((product, index) => (
          <ProductItem
            key={index}
            image={product.image[0]}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default ListProducts
