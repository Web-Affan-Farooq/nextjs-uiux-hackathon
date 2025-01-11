"use client";

import React, {createContext, useState} from 'react';
import { Iproducts } from '@/@types/Products';

export const WishListContext = createContext<[Iproducts[], React.Dispatch<React.SetStateAction<Iproducts[]>>]>( [[], () => {}] );

const WishlistContextProvider = ({children}:{children:React.ReactNode}) => {
    const [wishList, setwishList] = useState<Iproducts[]>([]);
  return (
    <WishListContext.Provider value={[wishList,setwishList]}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishlistContextProvider;