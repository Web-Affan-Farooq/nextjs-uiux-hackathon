"use client";

import { NavContext } from '@/context/NavContext';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';

const Sidebar = () => {
    const [navStatus, setNavStatus] = useContext(NavContext);
    const [windowSize, setwindowSize] = useState<number>(0)

    useEffect(() => {
        const updateWidth = () => {
            setwindowSize(window.innerWidth)
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return window.removeEventListener("resize", updateWidth);
    },[]);

    return (
        <div className={clsx(`z-10 bg-black transition-all duration-1000 ease-in-out p-[20px] w-[350px] h-[100vh] text-white max-md:absolute max-md:left-0 max-md:w-[82vw] `, {
            "w-[350px]": navStatus && windowSize >768,
        'w-[82vw]': navStatus===true && windowSize <=768,
        'hidden': navStatus===false && windowSize <=768,
        'w-[75vw]': navStatus && windowSize <=640,
        })}>
            
            <Image src={"/images/logo.svg"} alt='comforty' width={150} height={150} className=''/>
            <br />

            <div className='flex flex-col flex-nowrap justify-start items-start gap-2'>
                <Link href={"/form-submissions"} className='w-full'>    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md' onClick={(e:React.MouseEvent<HTMLDivElement>) => {
                    setNavStatus(!navStatus)
                }}>
                    Form Submissions
                </div>
                </Link>

                <Link href={"/orders"} className='w-full'>
                    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md' onClick={(e:React.MouseEvent<HTMLDivElement>) => {
                        setNavStatus(!navStatus)
                    }}>
                        Orders
                    </div>
                </Link>

                <Link href={"/inventory"} className='w-full'>
                    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md' onClick={(e:React.MouseEvent<HTMLDivElement>) => {
                        setNavStatus(!navStatus)
                    }}>
                        Inventory
                    </div>
                </Link>

                <Link href={"/events"} className='w-full'>
                    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md' onClick={(e:React.MouseEvent<HTMLDivElement>) => {
                        setNavStatus(!navStatus)
                    }}>
                        Events
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar;