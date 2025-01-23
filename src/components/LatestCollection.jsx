import { useAssets } from '@/hooks/assets/useAssets'
import React from 'react'
import Title from './Title';
import { useState ,useEffect} from 'react';
import LatestProductItem from './LatestProductItem';



const LatestCollection = () => {
  const { products } = useAssets()
  const [latestProducts, setLatestProducts] = useState([])
  
  useEffect(() => {
     setLatestProducts(products.slice(0,10))
   },[])
    
  return (
    <div className="m-5 my-10">
      <div className="py-8">
              <Title text1={"LATEST"} text2={"COLLECTIONS"} />
              <p className='w-3/4 m-auto p-3 text-sm  md:text-base text-wrap px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nobis magni nemo quam</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8'>
        {
  latestProducts.map((item) => (
    <LatestProductItem
      key={item._id} // Add a unique key here
      productId={item._id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ))
}

      </div>
    </div>
  );
}

export default LatestCollection
