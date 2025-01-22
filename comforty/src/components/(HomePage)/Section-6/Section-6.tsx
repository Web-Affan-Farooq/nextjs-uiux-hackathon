import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  //importing products card
import { defineQuery } from 'next-sanity';
import sanityClient from "@/lib/sanity";
import { Product } from '@/@types/Products';

const Section_6 = async () => {
  const querry =defineQuery(
    `
*[_type == "product" && tags[2] == 'Top rated' ] {
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
  weight,
  tags,
  }
    `
  );

  const response = await sanityClient.fetch(querry);
  const data:Product[] = await response;

  return (
    <section className=''>
        <h1 className='text-[32px] text-purple font-semibold text-center'>Our Toprated Products</h1>
        <br /><br />
        <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>
            {/* <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$18"  link={""} allowResponsiveness={true}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$18"  link={""} allowResponsiveness={true}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$18" link={""} allowResponsiveness={true}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$18"  link={""} allowResponsiveness={true}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$18" link={""} allowResponsiveness={true}/> */}

            {
              data.map((product:Product, index:number) => {
                return <Card image={product.image.asset.url} name={product.productName} price={product.price} link={product._id} allowResponsiveness={true} key={index}/>
              })
            }
            {/* <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$20" link={2}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$50" link={3}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={4}/>
            <Card image={"/images/section-3-home/2.svg"} name='Product name' price="$30" link={5}/>
            <Card image={"/images/section-3-home/4.svg"} name='Product name' price="$30" link={6}/>
            <Card image={"/images/section-3-home/3.svg"} name='Product name' price="$30" link={7}/>
            <Card image={"/images/section-3-home/1.svg"} name='Product name' price="$30" link={8}/> */}
        </div>     
    </section>
  )
}

export default Section_6