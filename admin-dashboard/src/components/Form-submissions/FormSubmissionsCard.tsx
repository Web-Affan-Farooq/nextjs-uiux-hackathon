import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormData } from '@/@types/FormData';

const FormSubmissionsCard = ({data}:{data:FormData}) => {
  return (
    <div className='bg-white w-[300px] p-[10px] rounded-md flex flex-row flex-nowrap justify-start items-center gap-2 overflow-hidden h-[75px]'>
        <Image src={"/images/user.jpg"} alt='user' width={30} height={30} className='rounded-full w-[35px] h-[35px]'/>
        <div>
        <h3 className='font-bold'>{data.customerName}</h3>
        <p className='text-[15px] after:content["See more"]'>{data.customerMessage.slice(0,20)} &nbsp; &nbsp;<Link href={`/form-submissions/${data._id}`} className='text-blue-500'>See more.</Link></p>
        </div>
    </div>
  )
}

export default FormSubmissionsCard;