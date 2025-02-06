// "use client";

import React from 'react';
// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"

import Card from '@/components/Cards/Card-products/Card';
import sanityClient from '@/lib/sanity';
import { Product } from '@/@types/Products';

const Chairs = async () => {

    const querry = 
        `
        *[_type == "product" && category == "Chairs"] {
_id,
image {
asset -> {
url,
_id,
}
},
productName,
shortDescription,
longDescription[]{
style,
children[] {
text,
}
},
category,  
price,
discount,
ratings,
ratingsInCount,
quantityAvailable,
weight,
}
        `

    const response = await sanityClient.fetch(querry);
    const data = await response;
    // console.log(data[0]);

    // const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setsearchQuerry(e.target.value)
    // }
    // const specificSearch = () => {
    //    if(searchQuerry.trim() !== "") {
    //     // console.log(searchQuerry);

    //     // apply search operations....
    //    }
    // }
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
        <section>
            {/* <div>
                <AlertDialog>
                    <div className='fixed top-20 flex flex-row flex-wrap justify-center items-center right-10 rounded-full text-white bg-blue w-[40px] h-[40px]'>
                        <AlertDialogTrigger className=''>
                            <i className="fa-solid fa-magnifying-glass text-center m-auto" id='search-querry'></i>
                        </AlertDialogTrigger>
                    </div>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Search products</AlertDialogTitle>
                            <AlertDialogDescription>
                                <input type="text" name='searchQuerry' id='search-querry' placeholder='Library stool chair' required onChange={handleSearch} className='border-[1px] rounded-lg border-solid border-gray-400 w-full px-[20px] py-[9px]'/>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction onClick={specificSearch} className='bg-blue text-white font-bold'>Search</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </div> */}


            <section className=''>
                <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
                    <h1 className='text-[32px] text-purple font-semibold'>Modern Chairs</h1>
                </div>
                <br />
                <div className='flex flex-row flex-wrap gap-7 max-sm:gap-0 justify-center items-center w-[80vw] m-auto'>

                    {data.map((product: Product) => {
                        return (
                            <Card image={product.image.asset.url} name={product.productName} price={product.price} link={product._id} key={product._id}/>
                        )
                    })}
                </div>
                <br /><br /><br />
            </section>
        </section>
    )
}

export default Chairs;