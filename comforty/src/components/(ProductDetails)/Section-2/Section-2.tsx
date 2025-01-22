import React from 'react';
import Card from '@/components/Cards/Card-simple/Card';

const Section_2 = () => {
  return (
    <section className='py-10'>
        <div className='flex flex-row flex-nowrap justify-between items-center xl:justify-around max-md:px-[50px] max-sm:px-[25px]'>
            <h1 className='font-bold text-[28px] leading-[33px] tracking-[20%]max-sm:text-[25px]'>Featured Products</h1>

            <div className='border-b-3 border-solid border-black text-[18px] leading-[21px] py-2'>
                View All
            </div>
        </div>

        <br />

        <div className=' flex flex-row flex-wrap justify-center items-center gap-[20px] py-[20px]'>

            <Card image='/products/1.svg' name='Library Stool Chair' price='$99'/>
            <Card image='/products/3.svg' name='Library Stool Chair' price='$99'/>
            <Card image='/products/6.svg' name='Library Stool Chair' price='$99'/>
            <Card image='/products/2.svg' name='Library Stool Chair' price='$99'/>
            <Card image='/products/9.svg' name='Library Stool Chair' price='$99'/>

        </div>
    </section>
  )
}

export default Section_2