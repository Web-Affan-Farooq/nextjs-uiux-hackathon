import React from 'react';
import FAQ_card from '../FAQ-card';

const Section_1 = () => {
    return (
        <section className=' py-[80px]'>
            <h1 className='text-black font-bold text-[48px] leading-[56px] text-center'>Questions Looks Here</h1>
            <br />
            <p className='text-[#4F4F4F] text-[16px] font-normal leading-[24px] text-center px-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

            <br /><br /><br />
            <div className='flex flex-row flex-wrap gap-10 justify-center items-center p-4'>
                <FAQ_card/>
                <FAQ_card/>
                <FAQ_card/>
                <FAQ_card/>
                <FAQ_card/>
                <FAQ_card/>
            </div>


        </section>
    )
}

export default Section_1