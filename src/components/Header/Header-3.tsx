"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { navContext } from "@/context/navContext";

const Header_3 = () => {
  const [navStatus, setNavStatus] = useContext(navContext);

  const handleNav = () => {
    setNavStatus(!navStatus);
  };

  const closeNav = () => {
    setNavStatus(false);
  };

  return (
    <div className="2xl:px-[300px] 2xl:py-[14px] xl:px-[200px] xl:py-[14px] lg:px-[150px] lg:py-[14px] md:px-[100px] md:py-[14px] sm:px-[50px] sm:py-[14px] max-sm:px-[40px] max-sm:py-[14px] flex flex-row flex-wrap justify-between items-center">
      {/* Navigation Links */}
      <div
        className={`flex flex-row flex-wrap justify-center items-center gap-[32px] text-graytext transition-all duration-300 max-md:absolute max-md:top-[140px] max-md:py-[80px] max-md:left-0 max-md:w-full max-md:bg-white max-md:flex-col ${
          navStatus
            ? "max-md:opacity-100 max-md:pointer-events-auto"
            : "max-md:opacity-0 max-md:pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="hover:text-blue transition-all text-[14px] font-medium"
          onClick={closeNav} // Close menu on link click
        >
          Home
        </Link>
        <Link
          href="/Cart"
          className="hover:text-blue transition-all text-[14px] font-medium"
          onClick={closeNav} // Close menu on link click
        >
          Shop
        </Link>
        <Link
          href="/Products"
          className="hover:text-blue transition-all text-[14px] font-medium"
          onClick={closeNav} // Close menu on link click
        >
          Products
        </Link>
        <Link
          href="/Products"
          className="hover:text-blue transition-all text-[14px] font-medium"
          onClick={closeNav} // Close menu on link click
        >
          Pages
        </Link>
        <Link
          href="/About"
          className="hover:text-blue transition-all text-[14px] font-medium"
          onClick={closeNav} // Close menu on link click
        >
          About
        </Link>
      </div>

      {/* Contact and Toggle */}
      <div className="flex flex-row flex-nowrap gap-2 items-center justify-center">
        <span>Contact:</span>
        <span className="text-purple font-bold">(808) 555-0111</span>
        {/* <div className="max-md:block hidden cursor-pointer" onClick={handleNav}>
          {navStatus ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Header_3;