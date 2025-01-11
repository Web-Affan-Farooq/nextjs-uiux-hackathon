import React from 'react';
import Image from 'next/image';
import Button_cart_blue from '@/components/Buttons/Button-cart-blue';
import Link from 'next/link';

interface Card {
    image: string;
    name: string;
    price: string;
    link: number;
    allowResponsiveness?: boolean;
}
const Card = ({ image, name, price, link, allowResponsiveness }: Card) => {
    if (allowResponsiveness) {
        return (
            <div className='group shadow-lg rounded-md w-[300px] px-[10px] py-[5px] whitespace-normal max-sm:w-[95vw] max-sm:flex max-sm:flex-row max-sm:flex-nowrap max-sm:gap-5'>
                <Image src={image} alt='furniture image' width={312} height={312} className='object-cover rounded-md w-[400px] h-auto max-sm:w-[120px]' />

                <div className='flex flex-row flex-nowrap justify-between items-center p-2 max-sm:flex-col max-sm:items-start max-sm:justify-center'>
                    <div className='flex flex-col flex-nowrap gap-2 justify-start items-start'>
                        <h1 className='leading-[12.8px] text-[16px] font-semibold group-hover:text-blue transition-all max-sm:leading-5'>
                            {name}</h1>
                        <span className='text-purple text-[18px] font-bold'>{price}</span>
                    </div>
                    <div>
                        <Link href={"/products/" + link}><Button_cart_blue /></Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='group shadow-lg rounded-md w-[300px] px-[10px] py-[5px] whitespace-normal'>
                <Image src={image} alt='furniture image' width={312} height={312} className='object-cover rounded-md w-[400px] h-auto' />

                <div className='flex flex-row flex-nowrap justify-between items-center p-2'>
                    <div className='flex flex-col flex-nowrap gap-2 justify-start items-start'>
                        <h1 className='leading-[12.8px] text-[16px] font-semibold group-hover:text-blue transition-all'>
                            {name}</h1>
                        <span className='text-purple text-[18px] font-bold'>{price}</span>
                    </div>
                    <div>
                        <Link href={"/products/" + link}><Button_cart_blue /></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;