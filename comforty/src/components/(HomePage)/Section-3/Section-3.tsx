import React from 'react';
import Card from '@/components/Cards/Card-products/Card';  // importing products card
import "./scroll.css";
import sanityClient from "@/lib/sanity";
// import { Product } from '@/@types/Products';
import { supabase } from '@/lib/supabase';

interface Product {
  category:string;
  discount:number;
  id:number;
  image:string;
  long_description:string;
  name:string;
  price:number;
  quantityAvailable:number;
  rating_count:number;
  ratings:number;
  short_description:string;
  tags:string[];
  weight:number;
}

const getData = async () => {
  const { data, error } = await supabase.from("Products").select("*").contains("tags", ["Featured"]);
  if (error) {
    console.log(error.message)
  }
  return data;
}

// const querry =
//   `
//   *[_type == "product" && tags[0] == 'Featured' ] {
// _id,
// image {
//   asset -> {
//     url,
//     _id,
//   }
// },
// productName,
// shortDescription,
// longDescription[]{
//   style,
//   children[] {
//     text,
//   }
// },
// category,  
// price,
// discount,
// ratings,
// ratingsInCount,
// quantityAvailable,
// warranty,
// weight,
// tags,
// }
//   `;

const Section_3 = async () => {
  // const response = await sanityClient.fetch(querry);
  // const data: Product[] = await response;

  const data= await getData();

  return (
    <section className=''>
      <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
        <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
      </div>
      <br />
      <div className='scroll-container w-[90vw] m-auto p-10 overflow-x-auto whitespace-nowrap transition-all scroll-smooth scroll-hidden'>
        <div className='flex flex-shrink-0 justify-between'>
          <div className='flex flex-row flex-nowrap gap-7 justify-center items-center'>
            {
              data? data.map((product:any, index: number) => {
                return <Card data={product} key={index} />
              }) : <></>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section_3;

// import Card from '@/components/Cards/Card-products/Card';
// import "./scroll.css";
// import { supabase } from '@/lib/supabase';

// async function Section_3() { // Now a server component (async function)


//   if (error) {
//     console.error("Error fetching data:", error.message);
//     return (
//       <section>
//         <p>Error loading products: {error.message}</p>
//       </section>
//     ); // Return error message directly in server component
//   }

//   if (!data || data.length === 0) {
//     return (
//       <section>
//         <p className="text-gray-500">No featured products found.</p>
//       </section>
//     ); // Return no data message directly
//   }

//   return (
//     <section>
//       <div className='flex flex-row py-[40px] flex-nowrap justify-between 2xl:px-[300px] xl:px-[100px] lg:px-[100px] md:px-[50px] sm:px-[50px] max-sm:px-[50px] items-center'>
//         <h1 className='text-[32px] text-purple font-semibold'>Featured</h1>
//       </div>
//       <br />
//       <div className='scroll-container w-[90vw] m-auto p-10 overflow-x-auto whitespace-nowrap transition-all scroll-smooth scroll-hidden'>
//         <div className='flex flex-shrink-0 justify-between'>
//           <div className='flex flex-row flex-nowrap gap-7 justify-center items-center'>
//             {/* {data.map((product:any, index:number) => (
//               <Card data={product} key={index} /> // Provide a key (id, name, or random if nothing else is available)
//             ))} */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Section_3;