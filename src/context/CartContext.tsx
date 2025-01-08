"use client";

import React,{createContext, useState} from 'react';

const cartContext = createContext<[any[], React.Dispatch<React.SetStateAction<any[]>>]>([[],() => {}]);

const CartContextProvider = ({children}:{children:React.ReactNode}) => {
    const [cart, setcart] = useState<any[]>([]);  // create type for it

  return (
    <cartContext.Provider value={[cart,setcart]}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider