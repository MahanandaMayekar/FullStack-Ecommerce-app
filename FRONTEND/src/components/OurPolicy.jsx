import React from 'react'
import OurPolicyItem from './OurPolicyItem'
import { useAssets } from '@/hooks/assets/useAssets'


const OurPolicy = () => {
    const { assets } = useAssets();
    console.log("asdfghj", assets);
    
  return (
    <div className="flex flex-col  sm:flex-row justify-around gap-5 p-7 my-20">
      <OurPolicyItem
        image={assets.exchange_icon}
        text1={"Easy exchange Policy"}
        text2={"We offer hassle free exchange policy"}
      />
      <OurPolicyItem
        image={assets.quality_icon}
        text1={"7 Days Return Policy"}
        text2={"We provide 7 days free return policy"}
      />
      <OurPolicyItem
        image={assets.exchange_icon}
        text1={"Best customer support"}
        text2={"we provide 24/7 customer support"}
      />
    </div>
  );
}

export default OurPolicy
