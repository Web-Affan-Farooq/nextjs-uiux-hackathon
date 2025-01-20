"use client";

import React, {useContext} from 'react';
import Card from '@/components/Cards/Card-Cartpage/Card';
import { CartContext } from '@/context/CartContext';
import Button_large_green from '@/components/Buttons/Button-large-green';
import { Product } from '@/@types/Products';

const Main_section = () => {
        const [cart] = useContext(CartContext);
        if(cart.length <= 0) {
            return             <section className=' my-[100px]'>
            <div className=''>

                <div className='flex flex-col flex-nowrap gap-4'>
                    <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                    <br /><br />
                    <div className='flex flex-col flex-nowrap justify-center items-center text-[20px] font-bold text-gray-500'>
                        No product found in your cart
                    </div>
                    <br />
                    <div className='m-auto'>
                    <Button_large_green text="Browse Products" link='/products'/>
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
                            <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                            <br /><br />
                            <div className='flex flex-col flex-nowrap justify-center items-center gap-1'>
                            {
                                    cart.map((cartProduct:Product, index:number) => {
                                        return  <Card image={cartProduct.image.asset.url} title={cartProduct.productName} description={cartProduct.shortDescription} id={cartProduct._id} key={index}/>
                                    })
                            }
                            </div>
                            <br />
                            <div className='m-auto'>
                            <Button_large_green text="Proceed To Checkout" link='/checkout'/>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
            )
        }

}

export default Main_section;