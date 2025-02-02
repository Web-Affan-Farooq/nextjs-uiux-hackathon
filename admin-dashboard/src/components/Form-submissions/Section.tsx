import React from 'react';
import FormSubmissionsCard from './FormSubmissionsCard';

const FormSubmissions = () => {
  return (
    <div>
        <h1 className='text-[25px] font-bold'>Form submissions</h1>
        <br />
        <div className='flex flex-row gap-2 flex-wrap justify-center items-center'>
            <FormSubmissionsCard name={"Muhammad affan"} message={"This is my message that I've"}/>
        </div>
    </div>
  )
}

export default FormSubmissions