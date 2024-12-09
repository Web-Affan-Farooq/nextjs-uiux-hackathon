import React from 'react';
import Button_underline from '@/components/Buttons/Button-underline';

const Section_2 = () => {
  return (
    <section className=''>
        <h1 className='text-black text-[45px] leading-[58px] text-center font-bold'>Or subscribe to the newsletter</h1>
        <br />
        <div className='flex flex-row flex-wrap gap-3 items-center justify-center max-md:gap-10'>
            <input type="email" name='email' id='email' placeholder='Email Address' className='border-b-4 border-solid border-black px-[15px] py-[10px] w-[643px] max-md:w-[70vw]'/>
            <Button_underline text='Submit'/>
        </div>
    </section>
  )
}

export default Section_2