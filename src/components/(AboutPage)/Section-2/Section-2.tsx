import React from 'react';
import Image from 'next/image';

const Section_2 = () => {
    return (
        <section className='py-[80px]'>
            <h1 className='text-[32px] font-semibold leading-[35px] text-purple text-center'>What makes our Brand Different</h1>

            <br />
            <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>

                <div className='w-[320px] h-[244px] p-[48px] flex flex-col flex-nowrap gap-[10px]'>
                    <Image src={"/icons/Delivery.svg"} alt='Delivery' width={24} height={24} className='object-cover' />
                    <h1 className='font-normal leading-[28px] text-[20px] text-blue'>Next day as standard</h1>
                    <h2 className='text-[16px] leading-[24px] font-normal text-blue'>
                        Order before 3pm and get your order the next day as standard
                    </h2>
                </div>

                <div className='w-[320px] h-[244px] p-[48px] flex flex-col flex-nowrap gap-[10px]'>
                    <Image src={"/icons/Delivery.svg"} alt='Delivery' width={24} height={24} className='object-cover' />
                    <h1 className='font-normal leading-[28px] text-[20px] text-blue'>Made by true artisans</h1>
                    <h2 className='text-[16px] leading-[24px] font-normal text-blue'>
                        Handmade crafted goods made with real passion and craftmanship
                    </h2>
                </div>

                <div className='w-[320px] h-[244px] p-[48px] flex flex-col flex-nowrap gap-[10px]'>
                    <Image src={"/icons/Delivery.svg"} alt='Delivery' width={24} height={24} className='object-cover' />
                    <h1 className='font-normal leading-[28px] text-[20px] text-blue'>Unbeatable prices</h1>
                    <h2 className='text-[16px] leading-[24px] font-normal text-blue'>
                        For our materials and quality you won’t find better prices anywhere
                    </h2>
                </div>

                <div className='w-[320px] h-[244px] p-[48px] flex flex-col flex-nowrap gap-[10px]'>
                    <Image src={"/icons/Delivery.svg"} alt='Delivery' width={24} height={24} className='object-cover' />
                    <h1 className='font-normal leading-[28px] text-[20px] text-blue'>Recycled packaging</h1>
                    <h2 className='text-[16px] leading-[24px] font-normal text-blue'>
                        We use 100% recycled to ensure our footprint is more manageable
                    </h2>
                </div>
            </div>

            <br />
            
        </section>
    )
}

export default Section_2