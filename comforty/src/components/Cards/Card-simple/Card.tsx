import React from 'react';
import Image from 'next/image';
import { Product } from '@/@types/Products';
import Link from 'next/link';

const Card = ({ data }: { data: Product }) => {
  // console.log(data.category);
  return (
    <Link href={`/products/${data._id}`}>
      <div className='rounded-md 2xl:w-[312px] xl:w-[312px] lg:w-[260px] md:w-[250px] sm:w-[200px] max-sm:w-[200px] px-[10px] py-[5px]'>
        <Image src={data.image.asset.url} alt={data.productName} width={240} height={240} className='w-[240px] h-[240px] m-auto rounded-md sm:w-[200px] sm:h-[200px] max-sm:w-[200px] max-sm:h-[200px]' />
        <h2 className='font-inter font-normal leading-[27px] text-[18px]'>{data.productName}</h2>
        <p className='font-inter font-normal leading-[27px] text-[18px]'>${data.price}</p>
      </div>
    </Link>
  )
}

export default Card