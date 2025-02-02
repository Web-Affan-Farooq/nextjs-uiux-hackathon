// "use client";

// import React, { useEffect, createContext, useState, useReducer, useRef } from 'react';
// import { CartProduct } from '@/@types/CartProduct';

// export const CartContext = createContext<[CartProduct[], React.Dispatch<React.SetStateAction<CartProduct[]>>]>([[], () => { }]);

// const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
//   let newCart = useRef<CartProduct[] | null>(null);
//   const [cart, setcart] = useState<CartProduct[]>([]);

//   useEffect(() => {
//     setcart(newCart.current || cart);
//   },[newCart]);


//   // product details update the cart > the cart updated successfully > re rendering of cart is resulting in update of quanity and update it more frequently

//   useEffect(() => { 
//     const groupedList = cart.reduce((accumulator: CartProduct[], item: CartProduct) => {
//       if (!accumulator.some((product) => product.product._id === item.product._id)) {
//         // accumulator.push(item);
//         return [...accumulator, item];

//       } else {
//         let requiredProduct = accumulator.find((product: CartProduct) => { return product.product._id === item.product._id });
//         if (requiredProduct) {
//           // requiredProduct.quantity += item.quantity
//           accumulator.map((product:CartProduct) => {
//             product.product._id === requiredProduct.product._id?  { ...product, quantity: product.quantity + item.quantity } : {product}
//           })
//         } else{}
//         // console.log("product exists", requiredProduct);
//       }
//       newCart.current = accumulator;
//       return accumulator;
//     }, []);

//   }, [cart]);

//   return (
//     <CartContext.Provider value={[cart, setcart]}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export default CartContextProvider;


"use client";

import React, { useEffect, createContext, useState, useRef } from "react";
import { CartProduct } from "@/@types/CartProduct";

export const CartContext = createContext<
  [CartProduct[], React.Dispatch<React.SetStateAction<CartProduct[]>>]
>([[], () => {}]);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  let newCart = useRef<CartProduct[] | null>(null);
  const [cart, setcart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const groupedList = cart.reduce((accumulator: CartProduct[], item: CartProduct) => {
      let existingProduct = accumulator.find((product) => product.product._id === item.product._id);

      if (existingProduct) {
        return accumulator.map((product) =>
          product.product._id === item.product._id
            ? { ...product, quantity: product.quantity + item.quantity }
            : product
        );
      } else {
        return [...accumulator, item];
      }
    }, []);

    if (JSON.stringify(groupedList) !== JSON.stringify(cart)) { // Prevent unnecessary updates
      newCart.current = groupedList;
      setcart(groupedList);
    }

    // console.log(groupedList);
    // console.log(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setcart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
