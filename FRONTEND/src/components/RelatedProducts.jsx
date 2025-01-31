import { useAssets } from '@/hooks/assets/useAssets'
import React, { useEffect, useState } from 'react'
import Title from './Title';
import LatestProductItem from './LatestProductItem';



const RelatedProducts = ({ category, subCategory}) => {
  const { products } = useAssets();
  const [relatedProducts, setRelatedProducts] = useState([]);
  //console.log("relatedProducts", relatedProducts);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      let filteredProduct = productCopy.filter(
        (product) =>
          product.category === category && product.subCategory === subCategory
      );
      //console.log("related filtered products", filteredProduct);
      setRelatedProducts(filteredProduct.slice(0, 10));
    }
  }, [products]);
    return (
      <div className="m-5 my-10">
        <div className="py-8">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
          {relatedProducts.map((item) => (
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

export default RelatedProducts
