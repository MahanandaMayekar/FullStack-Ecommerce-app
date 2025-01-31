import CartTotal from '@/components/CartTotal';
import Title from '@/components/Title'
import { useAssets } from '@/hooks/assets/useAssets';
import React from 'react'
import { useNavigate } from 'react-router-dom';




const PlaceOrder = ({ setPayMethod, payMethod }) => {
  const { assets } = useAssets();
  const navigate=useNavigate()
  return (
    <div className=" flex flex-col sm:flex-row gap-10 justify-around sm:justify-around pt-5 sm:pt-14 min-h-[80vh]  border-t-2">
      {/**--------left side */}

      <div className="flex flex-col gap-3 w-full ">
        <div className="flex justify-start mb-4">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="rounded border border-gray-400 pl-4 p-1 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded border border-gray-400 p-2 pl-4 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Enter your email "
          className="rounded border border-gray-400 p-2 pl-4 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="rounded border border-gray-400 p-2 pl-4 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="rounded border border-gray-400 pl-4 p-1 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="rounded border border-gray-400 p-2 pl-4 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="rounded border border-gray-400 pl-4 p-1 w-full no-spinne"
          />
          <input
            type="text"
            placeholder="Country"
            className="rounded border border-gray-400 p-2 pl-4 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Contact number"
          className="rounded border border-gray-400 pl-4 p-1 w-full no-spinne"
        />
      </div>
      <hr />

      {/**------right side */}

      <div className="mt-4 w-full flex-col flex justify-center sm:justify-right sm:flex-col ">
        <div className="w-full flex justify-start sm:justify-end h-min">
          <CartTotal />
        </div>
        <div className="mt-20 w-full flex flex-col gap-4 justify-start sm:justify-end h-min text-center">
          <div className="text-sm flex justify-start">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>
          {/**------Payment methode selection */}
          <div className=" flex gap-3 flex-col lg:flex-row justify-start">
            <div
              className="flex items-center border cursor-pointer gap-6 p-2 sm:w-500"
              onClick={() => setPayMethod("stripe")}
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full border-2 pl-2 ${
                  payMethod === "stripe" ? "bg-red-500" : ""
                } `}
              ></p>
              <img
                src={assets.stripe_logo}
                alt=""
                className="h-6 sm:h-8 lg:h-10 w-auto sm:w-auto max-w-[100px] object-contain sm:mr-14"
              />
            </div>
            <div
              className="flex items-center border cursor-pointer gap-6 p-2 sm:w-500"
              onClick={() => setPayMethod("razor")}
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full border-2 pl-2 ${
                  payMethod === "razor" ? "bg-red-500" : ""
                } `}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt=""
                className="h-6 sm:h-8 lg:h-10 w-auto sm:w-auto max-w-[100px] object-contain sm:mr-14"
              />
            </div>
            <div
              className="flex items-center border cursor-pointer gap-6 p-2 sm:w-500"
              onClick={() => setPayMethod("COD")}
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full border-2 pl-2 ${
                  payMethod === "COD" ? "bg-red-500" : ""
                }`}
              ></p>
              <p className="text-muted-foreground h-6 sm:pb-4  truncate">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="flex  justify-end w-full mt-2 ">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white p-3 rounded-sm active:bg-slate-700 "
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder
