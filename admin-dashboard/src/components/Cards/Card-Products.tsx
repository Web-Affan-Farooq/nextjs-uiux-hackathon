import React from 'react';
import Image from 'next/image';
import {Product} from "@/@types/Products";
import Link from 'next/link';

const Card_Products = ({data}:{data:Product}) => {
  
  return (
    <Link href={`/inventory/${data._id}`}>
            <div className='rounded-md w-[260px] flex flex-col flex-nowrap justify-start items-start gap-1 p-3 h-[355px] max-xl:w-[220px] max-sm:w-[80vw] max-sm:flex-row max-sm:flex-nowrap max-sm:justify-start max-sm:items-center max-sm:h-[140px]'>
              {data.quantityAvailable <10? <div className='relative bg-red-500 text-white px-[20px] text-[15px] py-[1px] rounded-md font-bold left-[30px] top-[50px] max-sm:top-[0px] max-sm:left-[70px]'><i className="fa-solid fa-arrow-down"></i></div>: <> </>}
              {data.ratings === 5 && data.ratingsInCount >=100? <div className='relative bg-yellow-500 text-white px-[20px] text-[15px] py-[1px] rounded-md font-bold left-[30px] top-[50px] max-sm:top-[25px] max-sm:left-[13px]'><i className="fa-regular fa-heart"></i></div>: <></>}
            <Image src={data.image.asset.url} alt='product image' width={150} height={150} className='m-auto w-[200px] h-[200px] rounded-md max-sm:w-[120px] max-sm:h-[120px] max-sm:m-0'/>
            <div className='p-4'>
            <h2 className='font-bold text-[20px] leading-[23px]'>{data.productName}</h2>
            <p className=''>{data.shortDescription}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card_Products;