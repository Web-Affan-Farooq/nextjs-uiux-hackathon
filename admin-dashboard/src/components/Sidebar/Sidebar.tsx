"use client";
import { NavContext } from '@/context/NavContext';
import React, { useContext} from 'react';
import Link from 'next/link';
import { OptionContext } from '@/context/Option';

const Sidebar = () => {
    const [navStatus] = useContext(NavContext);
    const [ option ,setOption] = useContext(OptionContext);
    
  return (
    <div className={`bg-black transition-all duration-1000 ease-in-out p-[20px] w-[350px] h-[100vh] rounded-md max-md:absolute max-md:left-0 max-md:w-[82vw] max-md:${navStatus? "rounded-none" : "hidden"} text-white`}>
    Sidebar

    <div className='flex flex-col flex-nowrap justify-start items-start gap-2'>
    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md' onClick={() => {
        setOption("Form Submissions")
    }}>
        Form Submissions
    </div>
    <div className='flex flex-row flex-nowrap justify-start items-center transition-all duration-250 ease-in-out hover:bg-gray-400 py-[10px] px-[20px] font-bold rounded-md'>
        <Link href={"/"}>Orders</Link>
    </div>
    </div>
  </div> 
   )
}

export default Sidebar;