import Title from '@/components/Title'
import { useAssets } from '@/hooks/assets/useAssets'
import React from 'react'


const About = () => {
  const {assets}=useAssets()
  return (
    <div className="">
      <div className="text-3xl mt-8 mb-10">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col sm:flex-row ">
        <div className="flex flex-col sm:flex-row gap-10">
          <img src={assets.about_img} alt="" className="w-full sm:w-1/3" />
          <div className="flex flex-col gap-10">
            <p className="text-gray-600">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes. Since our inception, we've worked
              tirelessly to curate a diverse selection of high-quality products
              that cater to every taste and preference. From fashion and beauty
              to electronics and home essentials, we offer an extensive
              collection sourced from trusted brands and suppliers.
            </p>
            <h3>
              <b>Our Mission</b>
            </h3>
            <p className="text-gray-600">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="text-3xl mt-8 mb-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex sm:flex-row flex-col gap-1">
        <div className="border-2 p-5 m-auto w-full  sm:w-1/3">
          <p>
            <b>Quality Assurance:</b>
          </p>
          <p className="text-sm text-gray-500 ">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border-2 p-5 m-auto w-full  sm:w-1/3">
          <p>
            <b>Convenience:</b>
          </p>
          <p className="text-sm text-gray-500 ">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border-2 p-5 m-auto w-full  sm:w-1/3">
          <p>
            <b>Exceptional Customer Service:</b>
          </p>
          <p className="text-sm text-gray-500">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
