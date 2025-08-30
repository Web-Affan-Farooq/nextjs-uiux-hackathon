// "use client";

import React from 'react';
import Card from '@/components/Cards/Card-products/Card';
import sanityClient from '@/lib/sanity';
import { Product } from '@/@types/Products';
import { supabase } from '@/lib/supabase';

const getData = async (cat:string) => {
  const { data, error } = await supabase.from("Products").select("*").eq("category", cat);
  if (error) {
    console.log(error.message)
  }
  // console.log(data);
  
  return data;
}

const Sofas = async () => {
// const [products, setproducts] = useState<Iproducts[]>();



// const querry =
//   `
//   *[_type == "product" && category == "Sofas"] {
//   _id,
//   image {
//     asset -> {
//       url,
//       _id,
//     }
//   },
//   productName,
//   shortDescription,
//   longDescription[]{
//     style,
//     children[] {
//       text,
//     }
//   },
//   category,  
//   price,
//   discount,
//   ratings,
//   ratingsInCount,
//   weight,
//   quantityAvailable,
//   tags,
//   }
//       `

//   const response = await sanityClient.fetch(querry);
//   const data = await response;

const data = await getData("Sofas");

    return (
        <section className=''>
            <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
                <h1 className='text-[32px] text-purple font-semibold'>Sofas</h1>
            </div>
            <br />
            <div className='flex flex-row flex-wrap gap-7 max-sm:gap-1 justify-center items-center w-[80vw] m-auto max-sm:w-full'>

                {data?.map((product:Product, index:number) => {
                    return (
                        <Card data={product} key={index}/>
                    )
                })}
            </div>
            <br /><br /><br />
        </section>)
}

export default Sofas;


/*  use this useEffect to test front end with demo products */

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

