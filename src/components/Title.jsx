import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <p className="text-gray-500 sm:text-2xl md:text-3xl">{text1}</p>
      <span className="text-black sm:text-2xl md:text-3xl">{text2}</span>
      <p className="w-8 md:w-14 h-[2px] bg-black"></p>
    </div>
  );
}

export default Title
