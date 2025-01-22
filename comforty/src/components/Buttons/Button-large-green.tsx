import React from 'react';
import Link from 'next/link';

const Button_large_green = ({ text, link }: { text: string; link?: string }) => {
  if (link) {
    return (
      <Link href={link}>
        <div>
          <button type="button" className='py-[14px] px-[24px] rounded-[8px] bg-blue font-bold text-[16px] text-white max-md:px-[20px] max-md:py-[10px]'>
            <span>{text}</span> <span><i className="fa-solid fa-arrow-right"></i></span>
          </button>
        </div>
      </Link>
    )
  } else {
    return (
      <div>
        <button type="button" className='py-[14px] px-[24px] rounded-[8px] bg-blue font-bold text-[16px] text-white max-md:px-[20px] max-md:py-[10px]'>
          <span>{text} </span> <span><i className="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>
    )
  }
}

export default Button_large_green