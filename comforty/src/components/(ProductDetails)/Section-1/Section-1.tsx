"use client";

import React, {  useEffect, useContext, useState} from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/@types/Products';
import toast, {Toaster} from 'react-hot-toast';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';
import { WishlistContext } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { CartProduct } from '@/@types/CartProduct';

const Section_1 = ({data}: {data:Product}) => {// Product
    const [cart, setCart] = useContext(CartContext);
    const [wishList, setWishList] = useContext(WishlistContext);
    const [count, setCount] = useState(1);
    const router = useRouter();

    // useEffect(() => {

    //   const selectedProducts = cart.filter((productArray:CartProduct, index:number) => {
    //     return cart.indexOf(productArray) === index;
    //   });
    //   console.log("New list after deduction:" ,selectedProducts);

    // },[cart]);
        

        // cart.some((cartProducts:CartProduct) => {
        //     // const [compare] = cartProducts;
        //     cart.forEach((productMatch:CartProduct) => {
        //         // const [product] = productMatch;
        //          return cartProducts[0].product._id === productMatch[0].product._id
        //     })
        // })

    // const [counterVisibility, setCounterVisibility] = useState(true);

    // useEffect(() =>{
    //     console.log("Cart :", cart);        
    // },[cart]);

    const handleAddToCart = () => {
        // setCart((prev) => [...prev, data]);
        /*
        [
        [ {
        product:
        quant
        }]
        ]
         */
        setCart([...cart, {
            product:data,
            quantity:count,
        }]);

        // array >array[ { product, quantity}]
        // console.log(data); 

        toast.success("Product Added To Cart Successfully", {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        });
        router.push("/products");
    }
    const handleAddToWishlist = () => {
        setWishList((prev) => [...prev, data]);
        toast.success("Product Added To Wishlist Successfully", {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        })
    }

    return (
        <>
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
                <div className='flex flex-row flex-nowrap justify-start items-center gap-5'>
                <p>Quantity: {count}</p>
                <div className='flex flex-row flex-nowrap justify-start items-center gap-3'>
                <button type="button" className=' w-[20px] h-[20px] text-center font-bold text-[20px] rounded-full bg-blue text-white flex flex-row flex-nowrap justify-center items-center' onClick={() => {
                        setCount(count+1);
                }}>
                    <span>+</span> 
                </button>

                <button type="button" className=' w-[20px] h-[20px] text-center font-bold text-[20px] rounded-full bg-blue text-white flex flex-row flex-nowrap justify-center items-center' onClick={() => {
                    if(count > 1) {
                        setCount(count -1)
                    }
                }}>
                    <span>-</span> 
                </button>
                </div>
                </div>
                <br />
                <p className='font-normal text-purple'>{data.longDescription[0].children[0].text}</p>
                <br />
                <div className='flex flex-row flex-nowrap gap-5'>
                    
                    <Button className='text-white bg-orangelabel rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' onClick={() => {
                        handleAddToWishlist();
                    }}>
                    <Image src={"/icons/heart-white.svg"} alt='cart' width={20} height={20} className='' />
                        <span>Add To Wishlist</span>
                    </Button>

                    <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' onClick={() => {
                        handleAddToCart();
                    }}>
                    <Image src={"/icons/cart.svg"} alt='cart' width={20} height={20} className='' />
                        <span>Add To Cart</span>
                    </Button>

                </div>
            </div>
        </section>
        </>
    )
}

export default Section_1;