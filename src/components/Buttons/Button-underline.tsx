import React from 'react'

const Button_underline = ({text}: {text:string}) => {
  return (
    <div>
        <button type="button" className="border-b-4 border-solid border-black px-[20px] py-[10px] uppercase">
            {text}
        </button>
    </div>
  )
}

export default Button_underline