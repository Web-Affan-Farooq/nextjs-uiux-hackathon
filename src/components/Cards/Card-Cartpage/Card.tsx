"use client";

import React ,{useContext} from "react";
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import { Product } from "@/@types/Products";
import { WishlistContext } from "@/context/WishlistContext";

interface Card {
    image: string;
    title: string;
    description:string;
    id: string;
}

const Card = ({ image, title, id, description }: Card) => {
    const [cart, setCart] = useContext(CartContext);
    const [wishList, setWishlist] = useContext(WishlistContext);

    const handleRemoveFromCart = (productId:string) => {
        const requiredIndex = cart.findIndex((product:Product) => product._id === productId);
        cart.splice(requiredIndex, 1);
        setCart([...cart]);
        // console.log(`Product deleted from cart`);

        toast.success("Product Deleted From Cart Successfully", {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        })  
    }  

    // useEffect(() => {
    //     console.log("Cart : ",cart);
    // },[cart]);

    const handleAddToWishlist = (productId:string) => {
        // const requiredIndex:number = cart.findIndex((product:Product) =>  product._id === productId);
        // cart.splice(requiredIndex, 1).forEach((product:Product) => {
        //     wishList.push(product);
        //     setWishlist([...wishList]);
        // })
        // // setWishlist([...wishList]);
        // toast.success(`Product ${cart[requiredIndex].productName} Added To your Wishlist`, {
        //     style: {
        //         backgroundColor:"rgba(255,255,255,0.5)",
        //         backdropFilter:"blur(20px)",
        //     }
        // })  
        
                const requiredIndex:number = cart.findIndex((product:Product) =>  product._id === productId);

        wishList.push(cart[requiredIndex]);
        setWishlist([...wishList]);
        toast.success(`Product ${cart[requiredIndex].productName} Added To your Wishlist`, {
            style: {
                backgroundColor:"rgba(255,255,255,0.5)",
                backdropFilter:"blur(20px)",
            }
        })  
    }

    return (
        <div className='p-3 flex flex-row flex-nowrap gap-7 justify-center items-center w-[400px] '>
            <Toaster  reverseOrder={false} position="top-left" />
            <Image src={image} alt={title+" image"} width={150} height={150} className='object-cover' />
            <div className='flex flex-col flex-nowrap justify-center items-start gap-1'>
                <span className='text-[18px] leading-[20px] font-bold text-black'>{title}</span>
                <span className='text-[15px] leading-[20px] font-normal text-black'>{description}</span>
                <div className='flex flex-row flex-nowrap justify-between gap-2'>
                    <span className='text-[15px] leading-[20px] font-normal text-black'>Size: 1</span>
                    <span className='text-[15px] leading-[20px] font-normal text-black'>Quantity: 1</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-evenly items-center gap-4 h-[30px]'>
                    <Image src={"/icons/heart.svg"} alt='heart' width={16} height={16} className='object-cover' onClick={() => {
                        handleAddToWishlist(id);
                    }}/>
                    <Image src={"/icons/delete.svg"} alt='heart' width={16} height={16} className='object-cover' onClick={() => {
                                handleRemoveFromCart(id);
                    }}/>
                </div>
            </div>
        </div>
    )
}
export default Card;