// "use client";

import React from 'react';
import Products from "../../../data/products.json";
import Section_1 from '@/components/(ProductDetails)/Section-1/Section-1';
import Section_2 from '@/components/(ProductDetails)/Section-2/Section-2';

const Product = ({ params }: { params: Promise<{ slug: number }> }) => {
    const resolvedParams = React.use(params);
        const {slug} = resolvedParams;
        const requiredProduct = Products[slug] 
        
        if(!requiredProduct) {
        return (
          <div>Product not available</div>
        )
        }
  return (
    <div>
      <br /><br />
      <Section_1 name={requiredProduct.name} price={requiredProduct.price} description={requiredProduct.description} image={requiredProduct.image}/>
      <br /><br />
      <Section_2/>
      <br /><br /><br /><br />
    </div>
  )
}

export default Product