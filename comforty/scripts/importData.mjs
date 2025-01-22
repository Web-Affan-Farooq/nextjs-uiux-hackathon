import axios from "axios"; // importing axios library
import dotenv from "dotenv"; // importing dotenv package to resolve env variables
import path from "path"; // import builtin path module of nodejs
import { createClient } from "next-sanity";  // use for client configurations
import { fileURLToPath } from "url";  // builtin module used for absolute file url

const fileName = fileURLToPath(import.meta.url); // absolute url of file
const dirName = path.dirname(fileName);  // configure current directory
console.log(path.resolve(dirName, "../.env.local")); // absolute path for env file
dotenv.config({ path: path.resolve(dirName, "../.env.local") });

// Creating client for uploading data
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    apiVersion: '2021-08-31'
});

class createProduct{
  constructor(product_name,price, ratings, ratings_in_Count, quantity_available, short_description,long_description, tags, warranty,) {
    this.product_name = product_name;
    this.price = price;
    this.ratings = ratings;
    this.ratings_in_Count= ratings_in_Count;
    this.long_description = long_description;
    this.short_description =short_description;
    this.quantity_available = quantity_available;
    this.tags = tags;
    this.warranty = warranty;
    
  }
}


/*
    {
        "id": 1,
        "product_name": "Modern Leather Dining Chair",
        "price": 129.99,
        "ratings": 4.5,
        "ratings_in_count": 150,
        "quantity_available": 50,
        "short_description": "Sleek design, durable leather",
        "long_description": "Comfortable seating, easy to clean, perfect for modern dining rooms.",
        "image": "/stock/1.jpg"
    },
 */

// const importData = async () => {
//     try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         const productsData = await response.data;
//         // console.log(productsData);

//         if(productsData) {
//             for (product in productsData) {

//                 // cheking the if image presents then pick it
//                     const productToBeCreated = {
//                         _type:'product',
//                         name:product.title,
//                         description:product.description,
//                         price:product.price,
//                         discountPercentage:0,
//                         priceWithoutDiscount:product.price,
//                         rating:product.rating?.rate || 0,
//                         ratingCount:product.rating?.count || 0,
//                         tags:[],
//                         sizes:[],
//                         image:{
//                             _type:"image",
//                             asset: {
//                                 _type:"reference",
//                                 _ref:product.image
//                             }
//                         },
//                     }

//                     console.log(productToBeCreated);

//                     // const upload = await client.create(productToBeCreated);
//                     // console.log("product uploaded successfully", upload);
//             };
//         }

//     } catch (err) {
//         console.error("Error while fetching", err);
//     }
// }

const uploadImageToSanity = async (image) => {
    try {
        const response = await axios.get(image, {responseType:"arraybuffer"}); // fetching binary data of image from provided url
        const buffer = Buffer.from(response.data); // converting buffer into node buffer array
        const asset = await client.assets.upload("image",buffer, {
            filename:image.split("/").pop()
        });
        console.log("image uploaded successfully :",asset);
        return asset._id;

    }catch(err) {
        console.error("");
        return null;
    }
}


async function importData() {
    try {
      console.log('Fetching products from API...')
      // const response = await axios.get('http://192.168.1.109:3000/api/get-products');
      const response_1 = await axios.get('https://giaic-hackathon-template-08.vercel.app/api/products');
      const products_1 = response_1.data;
      
      /**
           {
      id: 40,
      product_name: 'Ivory Charm',
      price: 100,
      rating: 4.3,
      ratingsInCount: 88,
      Long_description: '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia nesciunt consequuntur enim accusamus vitae laudantium in? Ipsum quam, a, odit optio ut assumenda iure non perspiciatis voluptatibus sit dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsa iste odio totam suscipit, placeat aperiam rem repellendus, aliquid ab odit aut dicta illo ipsum ut. Quaerat cupiditate doloribus officia!',
      short_description: 'totam suscipit, placeat aperiam rem repellendus, aliquid ab odit aut dicta illo ipsum ut. Quaerat cupiditate doloribus officia!',
      quantityAvailable: 50,
      image: '/stock/40.jpg'
    }
       */

      console.log(products)
      // for (const product of products) {
      //   console.log(`Processing product: ${product.title}`)
      //   let imageRef = null;

      //   if (product.image) {
      //     imageRef = await uploadImageToSanity(product.image)
      //   }

      //   const sanityProduct = {
      //     _type: 'product',
      //     name: product.title,
      //     description: product.description,
      //     price: product.price,
      //     discountPercentage: 0,
      //     priceWithoutDiscount: product.price,
      //     rating: product.rating?.rate || 0,
      //     ratingCount: product.rating?.count || 0,
      //     tags: [],
      //     sizes: [],
      //     image: imageRef? {
      //       _type: 'image',
      //       asset: {
      //         _type: 'reference',
      //         _ref: imageRef,
      //       },
      //     } : undefined,
      //   }
      //   console.log('Uploading product to Sanity:', sanityProduct.name)
      //   const result = await client.create(sanityProduct)
      //   console.log(`Product uploaded successfully: ${result._id}`)

      //   console.log(sanityProduct);

      // }
      // console.log('Data import completed successfully!')
    } catch (error) {
      console.error('Error importing data:', error)
    }
  }
// importData();