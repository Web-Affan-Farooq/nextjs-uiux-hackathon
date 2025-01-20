"use client";

import React, { useContext} from 'react';
import { Product } from '@/@types/Products';
import toast, {Toaster} from 'react-hot-toast';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';

const Section_1 = ({data}: {data:Product}) => {
    const [cart, setCart] = useContext(CartContext);

    const handleAddToCart = () => {
        setCart((prev) => [...prev, data]);
        toast.success("Product Added To Cart Successfully", {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        })
    }
    return (
        <>
        <Toaster reverseOrder={false} position="top-left"/>

                <section className='flex flex-row flex-wrap justify-center items-center 2xl:gap-14 xl:gap-12 lg:justify-center lg:gap-10 md:justify-center md:px-0 md:gap-5 sm:justify-start sm:px-[80px] sm:gap-8 max-sm:gap-5 max-sm:justify-start max-sm:px-[28px]'>

            <div className=''>
                <Image src={data.image.asset.url} alt={data.productName} width={400} height={400} className='object-cover rounded-[10px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[400px] xl:h-[400px] lg:w-[400px] lg:h-[400px]  md:w-[300px] md:h-[300px] sm:w-[270px] sm:h-[270px] max-sm:w-[270px]' />
            </div>

            <div className='flex flex-col p-4 2xl:w-[600px] xl:w-[600px] w-[500px] md:w-[400px]'>
                <h1 className='font-bold text-[60px] leading-[66px] max-md:text-[40px] max-md:leading-[40px]'>{data.productName}</h1>
                <br />
                <div>
                    <span className='px-4 py-2 bg-blue rounded-[60px] text-white font-bold text-[16px]'>$ {data.price} USD</span>
                </div>
                <br />
                <p className='font-normal text-purple'>{data.longDescription[0].children[0].text}</p>
                <br />
                <div>
                    <button type="button" className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center gap-2 px-[20px] py-[10px]' onClick={() => {
                        handleAddToCart();
                    }}>
                        <Image src={"/icons/cart.svg"} alt='cart' width={20} height={20} className='' />
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section_1;