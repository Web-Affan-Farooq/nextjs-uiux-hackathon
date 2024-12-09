import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  //importing products card

const Section_6= () => {
  return (
    <section className=''>
        <h1 className='text-[32px] text-purple font-semibold text-center'>Our Products</h1>
        <br /><br />
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18" link={1}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={2}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={3}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={4}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$30" link={5}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={6}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$30" link={7}/>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$30" link={8}/>
        </div>     
    </section>
  )
}

export default Section_6