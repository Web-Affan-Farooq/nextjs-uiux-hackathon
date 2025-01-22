import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Card {
    image:string;
    name:string;
    price:string;
    link:number;
}
const Card = ({image, name, link,price}:Card) => {
    return (
        <Link href={"/"+link}>
                <div className='2xl:w-[424px] xl:w-[424px] lg:w-[360px] md:w-[300px] sm:w-[280px] max-sm:w-[250px] flex flex-col flex-nowrap gap-0'>
            <Image src={image} alt='furniture image' width={312} height={312} className='object-cover h-auto w-auto'/>
            <div className='relative px-5 py-1 bottom-16 bg-[#000000B2] backdrop-opacity-100 w-full'>
            <h1 className='text-white leading-[30px] text-[16px] font-semibold'>
            {name}</h1>
            <div className=''>
            <span className='text-graytext leading-2 text-[14px]'>1230 products available</span>
            </div>
            </div>
        </div>
        </Link>
    )
}

export default Card