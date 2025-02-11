"use client";

import { NavContext } from '@/context/NavContext';
import React, { useContext } from 'react';

const NavToogle = () => {
    const [navStatus, setNavStatus] = useContext(NavContext);
    

  return (
    <div className="z-10 max-md:flex hidden absolute right-10 top-10 p-4 rounded-full bg-white flex-row flex-nowrap justify-center items-center text-[21px] font-bold" onClick={(e:React.MouseEvent<HTMLDivElement>) => {
        setNavStatus(!navStatus);
    }}>{
        navStatus? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
    </div>
  )
}

export default NavToogle;