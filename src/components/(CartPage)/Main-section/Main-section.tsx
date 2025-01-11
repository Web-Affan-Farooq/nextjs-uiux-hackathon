"use client";

import React, {useContext} from 'react';
import Card from '@/components/Cards/Card-Cartpage/Card';
import { CartContext } from '@/context/CartContext';
import { Iproducts } from '@/@types/Products';
import Button_large_green from '@/components/Buttons/Button-large-green';

const Main_section = () => {
        const [cart] = useContext(CartContext);
    
    return (
        <section className=' my-[100px]'>
            <div className=''>

                <div className='flex flex-col flex-nowrap gap-4'>
                    <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Bag</h1>
                    <br /><br />
                    <div className='flex flex-col flex-nowrap justify-center items-center gap-1'>
                    {
                        cart? (
                            cart.map((cartProduct:Iproducts, index:number) => {
                                return  <Card image={cartProduct.image} title={cartProduct.product_name} description={cartProduct.short_description} id={cartProduct.id} key={index}/>
                            })
                        ) : (
                          <div>No Products found in your cart</div>
                        )
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

export default Main_section;