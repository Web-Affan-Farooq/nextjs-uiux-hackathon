import React from 'react';
import Card from '@/components/Cards/Card-simple/Card';
import Image from 'next/image';


const Section_3 = () => {
  return (
    <section className=' py-[80px]'>
      <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
      </div>

      <br />
      <div className='flex flex-row flex-wrap gap-7 justify-center items-center'>
        <div className=''>
          {/* <Image src={"/images/section-4-about"} alt='furniture image' width={400} height={400} className='object-cover'/> */}
          <Image src={"images/section-3-about/1.svg"} alt='furniture image' width={500} height={300} className='object-cover' />
          <h2 className='font-inter font-normal leading-[27px] text-[18px]'>The Poplar suede sofa</h2>
          <p className='font-inter font-normal leading-[27px] text-[18px]'>$99.00</p>
        </div>
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-auto'>
        </div>
      </div>
    </section>
  )
}

export default Section_3