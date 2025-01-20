import React from 'react';
import Image from 'next/image';

const Button_cart_blue = ({className}:{className?:string}) => {
  return (
    <button type="button" className={`w-[44px] h-[44px] bg-blue rounded-[8px] ${className}`}>
        <Image src={"/icons/cart-white.svg"} alt='add-to-cart' width={22} height={22} className='object-cover m-auto'/>  
      </button>
  )
}

export default Button_cart_blue