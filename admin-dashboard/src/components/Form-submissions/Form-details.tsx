import React from 'react';
import { FormData } from '@/@types/FormData';
import ComposeEmail from './ComposeEmail';

const Form_details = ({data}:{data:FormData}) => {

  return (
    <div className='p-4 bg-white rounded-md overflow-hidden w-[100%] break-words'>
        <h1 className='font-bold text-[24px]'>Form details:</h1>
        <br />
        <div className='flex flex-col flex-nowrap justify-start items-start gap-2'>
            <div className='flex flex-col flex-nowrap justify-start items-start gap-1'>
            <h1 className='font-bold'>Customer Name:</h1>
            <p className='break-all'>{data.customerName}</p>
            </div>
            <div className='flex flex-col flex-nowrap justify-start items-start gap-1'>
            <h1 className='font-bold'>Customer Email:</h1>
            <p className='break-all'>{data.customerEmail}</p>
            </div>
            <div className='flex flex-col flex-nowrap justify-start items-start gap-1'>
            <h1 className='font-bold'>Subject:</h1>
            <p className='break-all'>{data.messageSubject}</p>
            </div>
            <div className='flex flex-col flex-nowrap justify-start items-start gap-1'>
            <h1 className='font-bold'>Message:</h1>
            <p className='break-all'>{data.customerMessage}</p>
            </div>
        </div>
        <ComposeEmail/>
    </div>
  )
}

export default Form_details