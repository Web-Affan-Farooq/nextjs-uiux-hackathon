import React from 'react';
import Image from 'next/image';
import {Product} from "@/@types/Products";

const Card_Products = ({data}:{data:Product}) => {
  return (
    <div className='border-2 border-solid border-black flex flex-row flex-nowrap justify-start items-center gap-3 w-[400px]'>
    <Image src={data.image.asset.url} alt={data.productName} width={100} height={100}/>
    <div>
    <h1 className='font-bold text-[20px]'>{data.productName}</h1>
    <p>{data.shortDescription}</p>
    </div>
  </div>  )
}

export default Card_Products