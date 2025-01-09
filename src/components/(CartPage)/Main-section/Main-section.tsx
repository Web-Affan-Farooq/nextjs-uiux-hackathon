import React from 'react';
import Card from '@/components/Cards/Card-Cartpage/Card';

const Main_section = () => {
    return (
        <section className=' my-[100px]'>
            <div className=''>

                <div className='flex flex-col flex-nowrap gap-4'>
                    <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                    <br /><br />

                    <Card image='/images/1.svg' title='product title name of product' id='2'/>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </section>
    )
}

export default Main_section;