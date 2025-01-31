import { useAssets } from '@/hooks/assets/useAssets';
import React from 'react'


const Footer = () => {
    const { assets } = useAssets();
    return (
      <>
        <div className="flex flex-col justify-between gap-5 sm:flex-row   sm:gap-10 m-10 my-10">
          <div>
            <img src={assets.logo} alt="" className="w-32" />
            <p className="text-sm sm:text-base w-full md:w-2/3 text-stone-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <p className="text-xl m-1">COMPANY</p>
            <ul className="flex flex-col text-sm text-gray-600 gap-1">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <p className="text-xl m-1">GET IN TOUCH</p>
            <ul className="flex flex-col text-sm text-gray-600 gap-1">
              <li>+1-000-000-0000</li>
              <li>mahananda@gmail.com</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div>
          <hr />
          <p className="text-sm text-center m-3">
            Copyright 2024@ forever.com - All Right Reserved.
          </p>
        </div>
      </>
    );
}

export default Footer
