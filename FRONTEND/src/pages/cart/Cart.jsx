import CartTotal from '@/components/CartTotal';
import Title from '@/components/Title'
import { useAssets } from '@/hooks/assets/useAssets';
import { useShopContext } from '@/hooks/context/useShopContext';
import useFetchAllProducts from '@/hooks/products/useFetchAllProducts';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cartData, removeItemFromCart }) => {
  const { productList } = useFetchAllProducts();
  const {assets } = useAssets();
  const { currency } = useShopContext();
  const navigate=useNavigate()
  return (
    <div className="border-t-2 pt-10 ml-10">
      <div>
        <Title text1={"YOUR"} text2={" CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = productList.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="flex gap-6 border-t-2 flex-row justify-between items-center mt-4 "
            >
              <div className="flex gap-6">
                <Link to={`/product/${productData._id}`}>
                  <img
                    src={productData.image[0]}
                    alt={productData.name}
                    className="w-28 h-max sm:w-26 md:w-32 m-2 cursor-pointer "
                  />
                </Link>
                <div className="flex flex-col">
                  <p className=" pt-4 font-semibold text-xs">
                    {productData.name}
                  </p>
                  <p className="">
                    {currency}
                    {productData.price}
                  </p>
                  <span className=" border border-gray-400 w-6 h-6 flex items-center justify-center mt-2  bg-slate-100 p-4">
                    <p> {item.size}</p>
                  </span>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  className=" border-2 bottom-4 p-2 w-28 sm:w-44 md:w-54"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "0"
                      ? "null"
                      : removeItemFromCart(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
              </div>
              <div>
                <img
                  src={assets.bin_icon}
                  alt=""
                  className="w-6 cursor-pointer "
                  onClick={() => removeItemFromCart(item._id, item.size, 0)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex  justify-end mt-5 ">
        <CartTotal />
      </div>
      <div className="flex  justify-end w-full mt-2 ">
        <button
          onClick={() => navigate("/place-order")}
          className="bg-black text-white p-3 rounded-sm active:bg-slate-700 "
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart
