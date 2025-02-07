"use client";
import { NavContext } from '@/context/NavContext';
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
    const [navStatus] = useContext(NavContext);

    return (
        <div className={`bg-black transition-all duration-1000 ease-in-out p-[20px] w-[350px] h-[100vh] max-md:absolute max-md:left-0 max-md:w-[82vw] max-md:${navStatus ? "rounded-none" : "hidden"} text-white`}>
            
            <Image src={"/images/logo.svg"} alt='comforty' width={150} height={150} className=''/>
            <br />

            <div className='flex flex-col flex-nowrap justify-start items-start gap-2'>
                <Link href={"/form-submissions"} className='w-full'>    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md'>
                    Form Submissions
                </div>
                </Link>

                <Link href={"/orders"} className='w-full'>
                    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md'>
                        Orders
                    </div>
                </Link>

                <Link href={"/inventory"} className='w-full'>
                    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md'>
                        Inventory
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar;