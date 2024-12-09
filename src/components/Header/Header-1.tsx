import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header_1 = () => {
    return (
        <div className='2xl:px-[300px] 2xl:py-[14px] xl:px-[300px] xl:py-[14px] lg:px-[150px] lg:py-[14px] md:px-[100px] md:py-[14px] sm:px-[50px] sm:py-[14px] max-sm:hidden text-white bg-purple flex flex-row flex-wrap justify-between items-center'>

            <div>Free shipping on all orders over $50</div>

            <div className='flex flex-row flex-nowrap bg-transparent gap-4'>
                <select name="Language" id="language" className='bg-transparent'>
                    <option value="English" className='w-auto h-[10px] bg-purple'>Eng</option>
                    <option value="Urdu" className='w-auto h-[10px] bg-purple'>Urdu</option>
                </select>
                <Link href={"/FAQs"}><div>Faq's</div></Link>
                <div className='flex flex-nowrap flex-row gap-1'><Image src={"/icons/alert.svg"} alt='Need help' width={16} height={16} className='object-cover'/>Need Help</div>
            </div>

        </div>
    )
}

export default Header_1