import React from 'react';

const GreenLarge = ({className, text}:{className?:string, text:string}) => {
  return (
    <button className={`bg-customgreen transition-all duration-400 ease-out hover:bg-orangelabel px-[20px] py-[8px] rounded-md font-bold text-white ${className}`}>{text}</button>
  )
}

export default GreenLarge;