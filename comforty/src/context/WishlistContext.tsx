"use client";

import React, {createContext, useState} from 'react';
import { Product } from '@/@types/Products';

export const WishlistContext = createContext<[Product[], React.Dispatch<React.SetStateAction<Product[]>>]>( [[], () => {}] );

const WishlistContextProvider = ({children}:{children:React.ReactNode}) => {
    const [wishList, setWishlist] = useState<Product[]>([])
  return (
    <WishlistContext.Provider value={[wishList,setWishlist]}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider;