"use client";

import React, {createContext, useState} from 'react';
import { Product } from '@/@types/Products';

export const ProductContext = createContext<[Product, React.Dispatch<React.SetStateAction<Product>>]>([
    {
        category:"",
        discount:0,
        image: {
            asset: {
                url:"",
                _id:"",
            }
        },
        longDescription:[
            {
                style:"",
                children:[
                    {
                    text:"",
                }
            ]
            }
        ],
        price:0,
        productName:"",
        quantityAvailable:0,        
    ratings:0,
    ratingsInCount:0,
    shortDescription:"",
    _id:"",
    weight:"",
    }
     , () => {}]);

const ProductContextProvider = ({children}:{children:React.ReactNode}) => {

    const [product, setproduct] = useState<Product>(
        {
            category:"",
            discount:0,
            image: {
                asset: {
                    url:"",
                    _id:"",
                }
            },
            longDescription:[
                {
                    style:"",
                    children:[
                        {
                        text:"",
                    }
                ]
                }
            ],
            price:0,
            productName:"",
            quantityAvailable:0,        
        ratings:0,
        ratingsInCount:0,
        shortDescription:"",
        _id:"",
        weight:"",
        }
    );

  return (
    <ProductContext.Provider value={[product, setproduct]}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider