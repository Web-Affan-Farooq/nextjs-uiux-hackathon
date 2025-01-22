import React from 'react';
import Card from '@/components/Cards/Card-category/Card';  //importing category card

const Section_4 = () => {
  return (
    <section className=''>
        <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Top Categories</h1>
        </div>
        <br />
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>
            <Card image={"/images/section-4-home/1.svg"} name='Product name' price="$18" link={5}/>
            <Card image={"/images/section-4-home/2.svg"} name='Product name' price="$20" link={6}/>
            <Card image={"/images/section-4-home/3.svg"} name='Product name' price="$50" link={7}/>
        </div>     
    </section>
  )
}

export default Section_4;