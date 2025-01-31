
import { useShopContext } from '@/hooks/context/useShopContext'
import React from 'react'
import Title from './Title';
import useTotalCartAmount from '@/hooks/cart/useTotalCartAmount';


const CartTotal = () => {
    const totalAmount=useTotalCartAmount()
    const { currency, delivery_fee } = useShopContext();
    return (
      <div className="w-full sm:w-1/2  bg-slate-100 border">
        <div className=" p-1">
          <Title text1={"CART"} text2={"TOTALS"} />
            </div>
            <hr />
        <div className="flex flex-col text-sm gap-4 p-5 pb-1">
          <div className="flex justify-between gap-16">
            <p>Subtotal</p>
            <p>
              {currency}
              {totalAmount}
            </p>
          </div>
          <hr />
          <div className="flex justify-between gap-16 ">
            <p>Shipping Fees</p>
            <p>
              {currency}
              {delivery_fee}
            </p>
          </div>
          <hr />
          <div className="flex justify-between gap-16">
            <p className="font-bold">Grand Total</p>
            <p className="font-bold">
              {currency}
              {totalAmount === 0 ? "0" : delivery_fee + totalAmount}
            </p>
          </div>
        </div>
      </div>
    );
};

export default CartTotal
