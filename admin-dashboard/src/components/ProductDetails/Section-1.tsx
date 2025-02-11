"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import { Product } from '@/@types/Products';

const Section_1 = ({data}:{data:Product}) => {
    const [quantityCount, setquantityCount] = useState<number>(0);

  return (
    <section>

    <div className='border-2 border-solid border-black rounded-md flex flex-row flex-wrap gap-2 justify-center items-center'>
      <Image src={"/images/example.svg"} alt={"product image"} width={300} height={300} className='w-[300px] h-[300px] border-2 border-solid border-black' />
      <div className='border-2 border-solid border-black flex flex-col flex-nowrap justify-start items-start gap-2'>
        <h1 className='font-bold text-[30px]'>{data.productName}</h1>
        <p className='w-[500px]'>{data.longDescription[0].children[0].text}</p>
      </div>
    </div>


  </section>  )
}

export default Section_1