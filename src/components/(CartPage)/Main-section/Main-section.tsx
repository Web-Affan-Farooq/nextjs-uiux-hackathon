import React from 'react';
import Image from 'next/image';

const Main_section = () => {
  return (
    <section className=' my-[100px]'>
        <div className=''>

<div className='flex flex-col flex-nowrap gap-4'>
<h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
<br /><br />

<div className='flex flex-row flex-nowrap gap-5 justify-center items-center'>
                <Image src={"/products/1.svg"} alt='furniture image' width={150} height={150} className='object-cover' />
                <div className='flex flex-col flex-nowrap justify-center items-start gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Library Stool Chair</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Ashen Slate/Cobalt Bliss</span>
                <div className='flex flex-row flex-nowrap justify-between gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Size: 1</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Quantity: 1</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-evenly items-center w-[100px] h-[30px]'>
                    <Image src={"/icons/heart.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                    <Image src={"/icons/delete.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                </div>
                </div>
            </div>

            <div className='flex flex-row flex-nowrap gap-5 justify-center items-center'>
                <Image src={"/products/5.svg"} alt='furniture image' width={150} height={150} className='object-cover' />
                <div className='flex flex-col flex-nowrap justify-center items-start gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Library Stool Chair</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Ashen Slate/Cobalt Bliss</span>
                <div className='flex flex-row flex-nowrap justify-between gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Size: 1</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Quantity: 1</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-evenly items-center w-[100px] h-[30px]'>
                    <Image src={"/icons/heart.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                    <Image src={"/icons/delete.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                </div>
                </div>
            </div>

            <div className='flex flex-row flex-nowrap gap-5 justify-center items-center'>
                <Image src={"/products/8.svg"} alt='furniture image' width={150} height={150} className='object-cover' />
                <div className='flex flex-col flex-nowrap justify-center items-start gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Library Stool Chair</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Ashen Slate/Cobalt Bliss</span>
                <div className='flex flex-row flex-nowrap justify-between gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Size: 1</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Quantity: 1</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-evenly items-center w-[100px] h-[30px]'>
                    <Image src={"/icons/heart.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                    <Image src={"/icons/delete.svg"} alt='heart' width={17} height={17} className='object-cover'/>
                </div>
                </div>
            </div>
</div>
        </div>
<br /><br /><br /><br /><br />
    </section>
  )
}

export default Main_section