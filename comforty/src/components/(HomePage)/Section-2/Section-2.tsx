import React from 'react';
import Image from 'next/image';

const Section_2 = () => {
  return (
    <section>
        <div className='flex flex-row flex-wrap justify-center items-center gap-7 max-md:justify-evenly max-md:gap-3'>
            <Image src={"/images/section-2-home/1.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/2.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/3.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/4.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/5.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/6.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
            <Image src={"/images/section-2-home/7.svg"} alt='logo-1' width={100} height={100} className='object-cover'/>
        </div>
    </section>
  )
}

export default Section_2