import { Product } from '@/@types/Products';
import sanityClient from '@/lib/sanity';
import Card_Products from '../Cards/Card-Products';

const MainPage = async () => {
    const q = `*[_type == "product"]{
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
        weight,
        }`;
    const response = await sanityClient.fetch(q);
    const data = await response;
    return (
        <div>
            {/* <div className=''>{productData.length} products found</div> */}
            <div className=''>{data.length} products found</div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
                {data.map((product: Product, index: number) => {
                    return <Card_Products data={product} key={index} />
                })}
            </div>
        </div>
    )
}

export default MainPage;