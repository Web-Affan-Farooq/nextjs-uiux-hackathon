import React from 'react';
import Card from '@/components/Cards/Card-simple/Card';
import { Product } from '@/@types/Products';
import Link from 'next/link';
import sanityClient from '@/lib/sanity';

const Section_2 = async ({data}:{data:Product}) => {
  
  const q = `*[_type == "product" && category == "${data.category}"] {
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
          `;

  const response = await sanityClient.fetch(q);
const productsData = await response;

  return (
    <section className='py-10'>
        <div className='flex flex-row flex-nowrap justify-between items-center xl:justify-around max-md:px-[50px] max-sm:px-[25px]'>
            <h1 className='font-bold text-[28px] leading-[33px] tracking-[20%]max-sm:text-[25px]'>Featured Products</h1>

            <div className='border-b-3 border-solid border-black text-[18px] leading-[21px] py-2'>
                <Link href={"/products"}>
                View All
                </Link>
            </div>
        </div>

        <br />

        <div className=' flex flex-row flex-wrap justify-center items-center gap-[20px] py-[20px] max-md:gap-[10px] max-sm:gap-[5px]'>
            {
              productsData.map((product:Product, index:number) => {
                return <Card data={product} key={index}/>
              })
            }

        </div>
    </section>
  )
}

export default Section_2