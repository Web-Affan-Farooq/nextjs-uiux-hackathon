import React from 'react';
import Form_details from '@/components/Form-submissions/Form-details';
import sanityClient from '@/lib/sanity';

interface Params {
    params:Promise<{id:string}>
}
const Page = async ({params}:Params) => {
    const {id} = await params;

    const q = `*[_type =="contact" && _id == "${id}"] {
  _id,
  _updatedAt,
  customerMessage,
  messageSubject,
  customerEmail,
  customerName,
}`
    const response = await sanityClient.fetch(q);
    const data = response[0];
  return (
    <div>
    <Form_details data={data}/>
    </div>
  )
}

export default Page;