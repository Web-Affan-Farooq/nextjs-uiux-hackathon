"use client";

import React, {createContext, useState} from 'react';
import { Product } from '@/@types/Products';

export const WishListContext = createContext<[Product[], React.Dispatch<React.SetStateAction<Product[]>>]>( [[], () => {}] );

const WishlistContextProvider = ({children}:{children:React.ReactNode}) => {
    const [wishList, setwishList] = useState<Product[]>([]);
  return (
    <WishListContext.Provider value={[wishList,setwishList]}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishlistContextProvider;