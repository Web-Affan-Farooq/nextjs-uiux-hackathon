import React from 'react';
import Image from 'next/image';
import sanityClient from '@/lib/sanity';
import Section_1 from '@/components/ProductDetails/Section-1';
import Section_2 from '@/components/ProductDetails/Section-2';
import { DemoProduct } from '@/lib/DemoProduct';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
    const q =   `
    *[_type == "product" && _id=="${id}"] {
  _id,
  tags,
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
  quantityAvailable,
  warranty,
  weight,
  tags,
  }
    `;
    const [data] = await sanityClient.fetch(q);

  return (
    <main>
      <article>
        <Section_1 data={data}/>
        <Section_2 data={data}/>
      </article>
    </main>
  )
}

export default Page