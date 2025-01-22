import React from 'react';
import Image from 'next/image';

const Section_1 = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center items-center gap-5">
        <div className='w-[672px] h-[478px] bg-[#007580] p-16'>
            <h1 className='font-bold text-[32px] leading-[38px] text-white'>About Us - Comforty</h1>
            <br />
            <p className='font-normal leading-[22px] text-[18px] text-white'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>

            <br /><br /><br />
            <button type="button" className='px-[32px] py-[16px] bg-[#F9F9F926] text-white'>View Collection</button>
        </div>
        <div className=''>
            <Image src={"/images/section-3-home/1.svg"} alt='furniture image' width={450} height={490} className='object-cover'/>
        </div>
    </section>
  )
}

export default Section_1
