"use client";
import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/context/CartContext';
import { navContext } from '@/context/navContext';

const Header_2 = () => {

  const [navStatus, setNavStatus] = useContext(navContext);
  const [cart] = useContext(CartContext);

  const handleNav = () => {
    setNavStatus(!navStatus);
  };

  return (
    <div className='2xl:px-[300px] 2xl:py-[20px] xl:px-[200px] xl:py-[20px] lg:px-[150px] lg:py-[20px] md:px-[100px] md:py-[20px] sm:px-[50px] sm:py-[20px] max-sm:px-[40px] max-sm:py-[20px] flex flex-row flex-wrap justify-between items-center'>
        <div className='flex flex-row flex-nowrap gap-3 justify-center items-center'>
        <div className="max-md:block hidden cursor-pointer text-2xl w-[29px] h-[30px]" onClick={handleNav}>
          {navStatus ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Image src={"/images/logo.svg"} alt='Conforty' width={166} height={40} className='object-cover'/>
        </div>

        <div className='flex flex-row flex-nowrap gap-1 justify-center items-center'>
        <Image src={"/icons/cart.svg"} alt='add-to-cart' width={22} height={22} className='object-cover'/> 
        <Link href={"/cart"}><span>Cart</span></Link>
        <div className='bg-blue w-[20px] text-center text-[14px] h-[20px] rounded-full text-white'>{cart.length}</div>
        </div>
    </div>
  )
}

export default Header_2;