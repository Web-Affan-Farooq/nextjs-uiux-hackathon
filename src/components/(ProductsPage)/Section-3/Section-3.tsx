import React from 'react';
import Image from 'next/image';

const Section_3 = () => {
  return (
    <section className=''>
        <h1 className='text-black text-[45px] leading-[58px] text-center font-bold'>Follow products and discounts on Instagram</h1>
        <br /> 
<br />
        <div className='flex flex-row flex-wrap gap-[24px] justify-center items-center'>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
            <Image src={"/images/section-4-home/1.svg"} alt='furniture picture' width={200} height={200} className='object-cover rounded-lg'/>
        </div>
   </section>
  )
}

export default Section_3