import { useShopContext } from '@/hooks/context/useShopContext'
import React from 'react'
import { Link } from 'react-router-dom';


const LatestProductItem = ({ productId, image, name, price }) => {
    const { currency, delivery_fee } = useShopContext();
    return (
      <Link to={`/product/${productId}`}>
        <div className="overflow-hidden">
          <img
            src={image[0]}
            alt=""
            className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
          />
        </div>
        <p>{name}</p>
        <p>
          {currency}
          {price}
        </p>
      </Link>
    );



}

export default LatestProductItem
