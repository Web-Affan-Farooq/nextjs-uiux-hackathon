import React from 'react';
import FormSubmissionsCard from './FormSubmissionsCard';
import sanityClient from '@/lib/sanity';
import { FormData } from '@/@types/FormData';

const FormSubmissions = async () => {
  const q = `
    *[_type == "contact"] {
  _id,
  _updatedAt,
  customerMessage,
  messageSubject,
  customerEmail,
  customerName,
}
`
  const response:FormData[]= await sanityClient.fetch(q);
  return (
    <div>
        <h1 className='text-[25px] font-bold'>Form submissions</h1>
        <br />
        <div className='flex flex-row gap-2 flex-wrap justify-center items-center'>
            {/* <FormSubmissionsCard name={"Muhammad affan"} message={"This is my message that I've"}/> */}
            {
              response.map((submission:FormData, index:number) => {
                return <FormSubmissionsCard data={submission} key={index}/>
              })
            }
        </div>
    </div>
  )
}

export default FormSubmissions