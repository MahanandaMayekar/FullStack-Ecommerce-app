import Title from '@/components/Title';
import React from 'react'
import { useAssets } from "@/hooks/assets/useAssets";


const Contact = () => {
    const {assets}=useAssets()
  return (
    <div>
      <div className="text-3xl mt-8 mb-10">
        <Title text1={"LETS"} text2={"CONNECT"} />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <img src={assets.contact_img} alt="" className="w-full sm:w-2/5" />
          <div className="flex flex-col gap-10 ">
            <p className=" text-2xl font-bold">Our Store</p>
            <p>54709 Willms Station Suite 350, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
            <h2>
              <b>Careers at Forever</b>
            </h2>
            <p className="text-gray-600">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-black border-2 text-white p-3 hover:bg-white hover:text-black hover:border-2 rounded-sm mt-6 w-40 transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
