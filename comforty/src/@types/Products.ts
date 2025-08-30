// export interface Product {
//     category:string;
//     discount:number;
//     image: {
//         asset: {
//             url:string;
//             _id:string;
//         }
//     };
//     longDescription:[
//         {
//             style:string;
//             children:[
//                 {
//                 text:string;
//             }
//         ]
//         }
//     ];
//     price:number;
//     productName:string;
//     quantityAvailable:number;
// ratings:number;
// ratingsInCount:number;
// shortDescription:string;
// weight:string;
// _id:string;
// tags:string[];
// }


export interface Product {
    category: string;
    discount: number;
    id: number;
    image: string;
    long_description: string;
    name: string;
    price: number;
    quantityAvailable: number;
    rating_count: number;
    ratings: number;
    short_description: string;
    tags: string[];
    weight: number;
}