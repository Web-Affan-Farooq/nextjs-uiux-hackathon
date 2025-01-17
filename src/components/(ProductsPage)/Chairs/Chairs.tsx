"use client";

import React ,{useEffect, useState}from 'react';
import Card from '@/components/Cards/Card-products/Card';
import { Iproducts } from '@/@types/Products';

const Chairs =  () => {
const [products, setproducts] = useState<Iproducts[]>();

useEffect(() => {
    const getData = async () => {
        try {
            const response = await fetch("/api/get-products");
            const data = await response.json();
            setproducts(data.data)
            // console.log(data.data[0]);
        }
        catch(err) {
            console.error(err);
        }
    }
    getData();   
},[]);
/*
    id: number;
    image: string;
    long_description: string;
    price: number;
    product_name: string;
    quantity_available: number;
    ratings: number;
    ratings_in_count: number;
    short_description: string;
 */
    return (
        <section className=''>
            <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
                <h1 className='text-[32px] text-purple font-semibold'>Modern Chairs</h1>
            </div>
            <br />
            <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>

                {products?.map((product:Iproducts) => {
                    return (
                        <Card image={product.image} name={product.product_name} price={String(product.price)} link={product.id} key={product.id} allowResponsiveness={true}/>
                    )
                })}
            </div>
            <br /><br /><br />
        </section>)
}

export default Chairs;