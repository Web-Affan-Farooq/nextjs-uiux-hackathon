"use client";

import React, {createContext, useState} from 'react';
import { Iproducts } from '@/@types/Products';

export const CartContext = createContext<[Iproducts[], React.Dispatch<React.SetStateAction<Iproducts[]>>]>( [[], () => {}] );

const CartContextProvider = ({children}:{children:React.ReactNode}) => {
    const [cart, setcart] = useState<Iproducts[]>([])
  return (
    <CartContext.Provider value={[cart,setcart]}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;