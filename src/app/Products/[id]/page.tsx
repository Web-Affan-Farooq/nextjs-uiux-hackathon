"use client";

import React, {useState,useEffect} from 'react';
import { Iproducts } from '@/@types/Products';
import { usePathname } from 'next/navigation';
import Section_1 from '@/components/(ProductDetails)/Section-1/Section-1';
import Section_2 from '@/components/(ProductDetails)/Section-2/Section-2';

const Product = () => {

  const [product, setproduct] = useState<Iproducts>();
  const path = usePathname().split("/")[2];

  useEffect(() => {
      const getData = async () => {
          try {
              const response = await fetch(`/api/get-products/${path}`);
              const data = await response.json();
              setproduct(data.data)
          }
          catch(err) {
              console.error(err);
          }
      }
      getData();
  },[path]);  

  return (
    <div>
      <br /><br />

      {
        product? (
          <Section_1 name={product.product_name} price={String(product.price)} description={product.long_description} image={product.image} id={path} data={product}/>
        ): (
          <div>Loading ...</div>
        )
      }
      <br /><br />
      <Section_2/>
      <br /><br /><br /><br />
    </div>
  )
}

export default Product