// "use client";

import React from 'react';
import Card from '@/components/Cards/Card-products/Card';
import { defineQuery } from 'next-sanity';
import sanityClient from '@/lib/sanity';
import { Product } from '@/@types/Products';

const Sofas = async () => {
// const [products, setproducts] = useState<Iproducts[]>();

// useEffect(() => {
//     const getData = async () => {
//         try {
//             const response = await fetch("/api/get-products");
//             const data = await response.json();
//             setproducts(data.data)
//         }
//         catch(err) {
//             console.error(err);
//         }
//     }
//     getData();
    
// },[]);

const querry = defineQuery(
  `
  *[_type == "product" && category == "Sofas"] {
  _id,
  image {
    asset -> {
      url,
      _id,
    }
  },
  productName,
  shortDescription,
  longDescription[]{
    style,
    children[] {
      text,
    }
  },
  category,  
  price,
  discount,
  ratings,
  ratingsInCount,
  weight,
  quantityAvailable,
  }
      `
);

  const response = await sanityClient.fetch(querry);
  const data = await response;

    return (
        <section className=''>
            <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
                <h1 className='text-[32px] text-purple font-semibold'>Sofas</h1>
            </div>
            <br />
            <div className='flex flex-row flex-wrap gap-7 justify-center items-center w-[80vw] m-auto'>

                {data.map((product:Product) => {
                    return (
                        <Card image={product.image.asset.url} name={product.productName} price={product.price} link={product._id} key={product._id} allowResponsiveness={true}/>
                    )
                })}
            </div>
            <br /><br /><br />
        </section>)
}

export default Sofas;