import ProductItem from '@/components/ProductItem';
import React, { } from 'react'
import { List } from "react-content-loader";

const ListProducts = ({ productList, handleDeleteProduct, isFetching }) => {
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
        {isFetching ? (
          <div className='mt-10 '>
            <List />
          </div>
        ) : (
          <>
            {productList?.map((product, index) => (
              <ProductItem
                key={index}
                productId={product._id}
                image={product.image[0]}
                name={product.name}
                category={product.category}
                price={product.price}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ListProducts
