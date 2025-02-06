import React from 'react';
import Section_1 from '@/components/(ProductDetails)/Section-1/Section-1';
import Section_2 from '@/components/(ProductDetails)/Section-2/Section-2';
import { Product } from '@/@types/Products';
import sanityClient from '@/lib/sanity';


const DynamicProduct =  async ({params}:{params:Promise<{id:string}>}) => {

  const {id} = await params;
  const querry = 
    `
    *[_type == "product" && _id=='${id}'] {
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
quantityAvailable,
}
    `;
    
  const response = await sanityClient.fetch(querry);
  const data:Product[] = await response;

  // const [product, setproduct] = useState<Iproducts>();

  // useEffect(() => {
  //     const getData = async () => {
  //         try {
  //             const response = await fetch(`/api/get-products/${path}`);
  //             const data = await response.json();
  //             setproduct(data.data)
  //         }
  //         catch(err) {
  //             console.error(err);
  //         }
  //     }
  //     getData();
  // },[path]);


  return (
    <div>
      <br /><br />
      <Section_1 data={data[0]}/>
      <br /><br />
      <Section_2/>
      <br /><br /><br /><br />
    </div>
  )
}

export default DynamicProduct;