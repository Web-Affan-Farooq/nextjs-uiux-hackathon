import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  // importing products card
import "./scroll.css";
import sanityClient from "@/lib/sanity";
import { Product } from '@/@types/Products';

const querry =
  `
  *[_type == "product" && tags[0] == 'Featured' ] {
_id,
image {
  asset -> {
    url,
    _id,
  }
},
productName,
shortDescription,
longDescription[]{
  style,
  children[] {
    text,
  }
},
category,  
price,
discount,
ratings,
ratingsInCount,
quantityAvailable,
warranty,
weight,
tags,
}
  `

const Section_3 = async () => {
  const response = await sanityClient.fetch(querry);
  const data: Product[]= await response;

  return (
    <section className=''>
      <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
      </div>
      <br />
      <div className='scroll-container w-[90vw] m-auto p-10 overflow-x-auto whitespace-nowrap transition-all scroll-smooth scroll-hidden'>{/* overflox-x-scroll whitespace-nowrap w-[80vw] m-auto*/}
        <div className='flex flex-shrink-0 justify-between'>
          <div className='flex flex-row flex-nowrap gap-7 justify-center items-center'>
            {/* <Card image={"/products/4.svg"} name='Product name' price="18" link={""} />
            <Card image={"/products/1.svg"} name='Product name' price="20" link={""} />
            <Card image={"/products/3.svg"} name='Product name' price="50" link={""} />
            <Card image={"/products/3.svg"} name='Product name' price="30"  link={""} />
            <Card image={"/products/3.svg"} name='Product name' price="30" link={""} />
            <Card image={"/products/3.svg"} name='Product name' price="30" link={""}/> */}
            {
              data.map((product:Product, index:number) => {
                return <Card data={product} key={index}/>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_3;