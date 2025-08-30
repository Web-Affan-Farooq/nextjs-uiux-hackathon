"use client";

import React, {useContext} from 'react';
import Card from '@/components/Cards/Card-Cartpage/Card';
import { CartContext } from '@/context/CartContext';
import { CartProduct } from '@/@types/CartProduct';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Main_section = () => {
        const [cart] = useContext(CartContext);
        if(cart.length <= 0) {
            return             <section className=' my-[100px]'>
            <div className=''>
                <div className='flex flex-col flex-nowrap gap-4'>
                            <div className='flex flex-row flex-nowrap justify-start items-center'>
                            <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                            <Image src={"/icons/cart-black.svg"} alt='heart' width={20} height={20}/>
                            </div>                    <br /><br />
                    <div className='flex flex-col flex-nowrap justify-center items-center text-[20px] font-bold text-gray-500'>
                        No product found in your cart
                    </div>
                    <br />
                    <div className='m-auto'>
                        <Link href={"/products"}>
                        <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple'>
                        <span>Browse Products</span>
                    </Button>                
                        </Link>
                        </div>
                </div>
            </div>
            <br /><br /><br />
        </section>
        }else {
            return (
                <section className=' my-[100px]'>
                    <div className=''>
        
                        <div className='flex flex-col flex-nowrap gap-4'>
                            <div className='flex flex-row flex-nowrap justify-start items-center'>
                            <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                            <Image src={"/icons/cart-black.svg"} alt='heart' width={20} height={20}/>
                            </div>                            <br /><br />
                            <div className='flex flex-col flex-nowrap justify-center items-center gap-1'>
                            {
                                    cart.map((cartProduct:CartProduct, index:number) => {
                                        const {product, quantity} = cartProduct;

                                        return  <Card image={product.image} title={product.name} description={product.short_description} id={String(product.id)} key={index} quantity={quantity}/>
                                    })
                            }
                            </div>
                            <br />
                            <div className='m-auto'>
                            <Link href={"/checkout"}>
                            <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple'>
                        <span>Proceed To Checkout</span>
                    </Button>                
                            </Link>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
            )
        }

}

export default Main_section;