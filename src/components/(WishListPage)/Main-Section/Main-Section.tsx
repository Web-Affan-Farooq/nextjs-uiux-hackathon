"use client";

import React, {useContext} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Card from '@/components/Cards/Card-Wishlistpage/Card';
import { WishlistContext } from '@/context/WishlistContext';
import { Product } from '@/@types/Products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from '@/context/CartContext';

const Main_section = () => {
    const [wishList, setWishlist] = useContext(WishlistContext);
    const [cart, setcart] = useContext(CartContext);

    const handleMoveToCart = () => {
        wishList.forEach((product:Product) => {
            setcart([...cart, product]);
        });

        setWishlist([]);

        toast.success(`Products Moved To your Wishlist`, {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        });
    }

        if(wishList.length <= 0) {
            return <>
                        <Toaster  reverseOrder={false} position="top-left" />
            <section className=' my-[100px]'>
            <div className=''>

                <div className='flex flex-col flex-nowrap gap-4'>
                <div className='flex flex-row flex-nowrap justify-start items-center'>
                            <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Wishlist</h1>
                            <Image src={"/icons/heart.svg"} alt='heart' width={20} height={20}/>
                            </div>
                    <br /><br />
                    <div className='flex flex-col flex-nowrap justify-center items-center text-[20px] font-bold text-gray-500'>
                        No product found in your wishlist
                    </div>
                    <br />
                    <div className='m-auto'>
                    <Link href={"/products"}>
                                        <Button className='text-white bg-orangelabel rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple'>
                                        <Image src={"/icons/cart.svg"} alt='cart' width={20} height={20}/>
                                            <span>Browse Products</span>
                                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </section>
            </>
        }else {
            return (
                <>
            <Toaster  reverseOrder={false} position="top-left" />
                                <section className=' my-[100px]'>
                    <div className=''>
        
                        <div className='flex flex-col flex-nowrap gap-4'>
                            <div className='flex flex-row flex-nowrap justify-start items-center'>
                            <h1 className='text-[30px] font-bold leading-[33px] text-black mx-[30px]'>Your Wishlist</h1>
                            <Image src={"/icons/heart.svg"} alt='heart' width={20} height={20}/>
                            </div>
                            <br /><br />
                            <div className='flex flex-col flex-nowrap justify-center items-center gap-1'>
                            {
                                    wishList.map((wishListProduct:Product, index:number) => {
                                        return  <Card image={wishListProduct.image.asset.url} title={wishListProduct.productName} description={wishListProduct.shortDescription} id={wishListProduct._id} key={index}/>
                                    })
                            }
                            </div>
                            <br />
                            <div className='m-auto'>
                            <Button className='text-white bg-orangelabel rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' onClick={() => {
                                handleMoveToCart();
                            }}>
                                        <Image src={"/icons/cart.svg"} alt='cart' width={20} height={20}/>
                                            <span>Move To Cart</span>
                                        </Button>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
                </>
            )
        }

}

export default Main_section;