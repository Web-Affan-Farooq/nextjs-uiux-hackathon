import React from 'react';
import Card from '@/components/Cards/Card-products/Card';

const Section_1 = () => {
  return (
    <section className=''>
        <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
        </div>
        <br />
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18" link={1}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={2}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={3}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={4}/>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18" link={5}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={6}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={7}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={8}/>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18" link={9}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={10}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={11}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={8}/>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18" link={3}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={2}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={4}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={2}/>
        </div>
        <br /><br /><br />     
    </section>  )
}

export default Section_1