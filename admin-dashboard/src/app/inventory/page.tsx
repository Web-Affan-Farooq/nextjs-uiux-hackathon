import React from 'react';
import Image from 'next/image';
import sanityClient from '@/lib/sanity';
import Card_Products from '@/components/Cards/Card-Products';
import { Product } from '@/@types/Products';
import MainPage from '@/components/Products/MainPage';

const Page = async () => {
  const querry = 
  `
  *[_type == "product"][0..9] {
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
        <MainPage/>
    </div>
  )
}

export default Page