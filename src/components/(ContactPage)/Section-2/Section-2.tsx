import React from 'react';
import Image from 'next/image';
const Section_2 = () => {
  return (
    <section className='flex flex-row flex-wrap justify-evenly items-center gap-5'>

        <div className='w-[337px] flex flex-row flex-nowrap gap-3'>
            <Image src={"/icons/trophy.svg"} alt='High quality' width={60} height={60} className='object-cover'/>
            <div>
                <h1 className='font-semibold text-[#242424] text-[25px] leading-[37px]'>High Quality</h1>
                <p className='text-[20px] leading-[30px] text-[#898989] font-medium'>crafted from top materials</p>
            </div>
        </div>

        <div className='w-[337px] flex flex-row flex-nowrap gap-3'>
            <Image src={"/icons/check.svg"} alt='Warranty Protection' width={60} height={60} className='object-cover'/>
            <div>
                <h1 className='font-semibold text-[#242424] text-[25px] leading-[37px]'>Warranty Protection</h1>
                <p className='text-[20px] leading-[30px] text-[#898989] font-medium'>Over 2 years</p>
            </div>
        </div>

        <div className='w-[337px] flex flex-row flex-nowrap gap-3'>
            <Image src={"/icons/customer-support.svg"} alt='24 / 7 Support' width={60} height={60} className='object-cover'/>
            <div>
                <h1 className='font-semibold text-[#242424] text-[25px] leading-[37px]'>24 / 7 Support</h1>
                <p className='text-[20px] leading-[30px] text-[#898989] font-medium'>Dedicated support</p>
            </div>
        </div>

    </section>
  )
}

export default Section_2