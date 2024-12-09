import React from 'react'

const Button_large_green = ({text}: {text:string}) => {
  return (
    <div>
          <button type="button" className='py-[14px] px-[24px] rounded-[8px] bg-blue font-bold text-[16px] text-white max-md:px-[20px] max-md:py-[10px]'>
        <span>Shop Now </span> <span><i className="fa-solid fa-arrow-right"></i></span>
    </button>
    </div>
  )
}

export default Button_large_green