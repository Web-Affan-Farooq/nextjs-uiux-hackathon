"use client";

import React from "react";
import Image from "next/image";

interface Card {
    image: string;
    title: string;
    id: string;
}

const Card = ({ image, title, id }: Card) => {

    const handleDeleteFromCart = () => {

    }
    const handleAddToWishlist = () => {

    }

    return (
        <div className='flex flex-row flex-nowrap gap-5 justify-center items-center'>
            <Image src={"/products/5.svg"} alt='furniture image' width={150} height={150} className='object-cover' />
            <div className='flex flex-col flex-nowrap justify-center items-start gap-2'>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Library Stool Chair</span>
                <span className='text-[16px] leading-[20px] font-normal text-black'>Ashen Slate/Cobalt Bliss</span>
                <div className='flex flex-row flex-nowrap justify-between gap-2'>
                    <span className='text-[16px] leading-[20px] font-normal text-black'>Size: 1</span>
                    <span className='text-[16px] leading-[20px] font-normal text-black'>Quantity: 1</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-evenly items-center w-[100px] h-[30px]'>
                    <Image src={"/icons/heart.svg"} alt='heart' width={17} height={17} className='object-cover' onClick={handleAddToWishlist}/>
                    <Image src={"/icons/delete.svg"} alt='heart' width={17} height={17} className='object-cover' onClick={handleDeleteFromCart}/>
                </div>
            </div>
        </div>
    )
}
export default Card;