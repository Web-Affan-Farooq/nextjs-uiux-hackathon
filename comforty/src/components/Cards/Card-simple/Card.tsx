import React from 'react';
import Image from 'next/image';

interface Card {
    image:string;
    name:string;
    price:string;
}
const Card = ({image,name,price,}:Card) => {
  return (
    <div className=''>
        {/* <Image src={"/images/section-4-about"} alt='furniture image' width={400} height={400} className='object-cover'/> */}
        <Image src={image} alt='furniture image' width={240} height={240} className='object-cover'/>
        <h2 className='font-inter font-normal leading-[27px] text-[18px]'>The Poplar suede sofa</h2>
        <p className='font-inter font-normal leading-[27px] text-[18px]'>$99.00</p>
    </div>
  )
}

export default Card