import React from 'react';
import Image from 'next/image';
import sanityClient from '@/lib/sanity';
import Card_Products from '@/components/Cards/Card-Products';
import { Product } from '@/@types/Products';

const Page = async () => {
  const querry = 
  `
  *[_type == "product" && category == "Chairs"] {
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
}
  `

const response = await sanityClient.fetch(querry);
const data = await response; 
 return (
    <div>
        <h1 className='text-[24px] font-bold'>Inventory</h1>
        <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
        {
          data.map((product:Product, index:number) => {
            return <Card_Products data={product} key={index}/>
          })
        }
        </div>
    </div>
  )
}

export default Page