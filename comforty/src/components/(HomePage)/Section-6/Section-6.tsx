import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  //importing products card
import sanityClient from "@/lib/sanity";
import { Product } from '@/@types/Products';

const Section_6 = async () => {
  const querry =
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
  const response = await sanityClient.fetch(querry);
  const data:Product[] = await response;

  return (
    <section className=''>
        <h1 className='text-[32px] text-purple font-semibold text-center'>Our Toprated Products</h1>
        <br /><br />
        <div className='flex flex-row flex-wrap gap-7 max-sm:gap-0 justify-center items-center w-[80vw] m-auto'>
            {
              data.map((product:Product, index:number) => {
                return <Card image={product.image.asset.url} name={product.productName} price={product.price} link={product._id} key={index}/>
              })
            }
        </div>     
    </section>
  )
}

export default Section_6;