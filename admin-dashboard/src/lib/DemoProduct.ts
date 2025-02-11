import { Product } from "@/@types/Products"

export const DemoProduct:Product={
  productName:"Wooden chair",
  price:30,
  category:"Chair",
  quantityAvailable:3,
  discount:0,
  longDescription:[
    {
      style:"normal",
      children:[{
        text:"kdjfklsdjlkfjdslkfjklsdjlkfjlksjdlkfjdskljfklsjdflkjdlkfjdlkfjlkdjfd",
      }]
    }
  ],
  shortDescription:"kdjfksjdfd fksdj fks djfklsdj fkljds klfjsdkf",
  ratingsInCount:188,
  ratings:5,
  weight:40,
  image: {
    asset: {
      url:"/images/example.svg",
      _id:"fjkshdfjkdhsjkfhdsfdfds",
    }
  },
  _id:"jhgsdjfkhdsfdshfkjhds",
  tags:["Featured", "New Collections"]
}

//_____Demo product for testing