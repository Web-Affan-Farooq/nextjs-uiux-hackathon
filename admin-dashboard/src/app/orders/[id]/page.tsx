import React from 'react';
import sanityClient from '@/lib/sanity';
import { Order } from '@/@types/Orders';
import OrderDetails from '@/components/Orders/OrderDetails';

interface Params {
  params: Promise<{ id: string }>
}
const Page = async ({ params }: Params) => {
  const { id } = await params;

  const q = `
    *[_type == "order" && _id == "${id}"]{
  _id,
  packages,
  _updatedAt,
  paymentInfo,
  shippingInfo,
  }
    `;

  const response: Order[] = await sanityClient.fetch(q);
  const [data] = response;

  return (
    <OrderDetails data={data}/>
  )
}

export default Page