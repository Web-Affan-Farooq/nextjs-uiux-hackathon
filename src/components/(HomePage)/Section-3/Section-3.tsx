import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  // importing products card

const Section_3 = () => {
  return (
    <section className=''>
        <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
        </div>
        <br />
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center'>
            <Card image={"/products/4.svg"} name='Product name' price="$18" link={4}/>
            <Card image={"/products/1.svg"} name='Product name' price="$20" link={1}/>
            <Card image={"/products/3.svg"} name='Product name' price="$50" link={3}/>
            <Card image={"/products/3.svg"} name='Product name' price="$30" link={3}/>
        </div>     
    </section>
  )
}

export default Section_3