// import sanityClient from "@/lib/sanity";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { createKey } from "@/lib/keys";

// interface Checkout {
//     name: string;
//     phoneNumber: string;
//     email: string;
//     completeAddress: string;
//     country: string;
//     province: string;
//     city: string;
//     postalCode: string;
//     cardNumber: string;
//     accountNumber: string;
//     expirationDate: string;
//     CVV:string;
//     amountPayable:string;
//     description: string;
//     packages: [
//       {
//         product_name: string;
//         id: string;
//         quantity: number
//       }
//     ]
//   }

//   interface Package {
//     productName:string;
//     productQuantityRequired:number;
//     productId:string;
//     _key:string;
//   }

// const createOrder = async (data:Checkout) => { // take data from parameters
//     const productToBeSent:Package[]= [];

//     data.packages.map((p:{product_name:string; id:string; quantity:number}, index:number) => {
//         productToBeSent.push({
//             productName:p.product_name,
//             productId:p.id,
//             productQuantityRequired:p.quantity,
//             _key:createKey(), // --> return rendomly generated string
//         });
//     })

//     let order = {
//         _type:"order",
//         paymentInfo: {
//             CVV: data.CVV,
//             cardHolderName: data.name,
//             amountPayable: data.amountPayable,
//             description:data.description,
//             orderStatus: "Processing",
//             cardNumber: data.cardNumber,
//             expirationDate: data.expirationDate,
//             accountNumber:data.accountNumber,
//         },
//         shippingInfo: {
//             email: data.email,
//             completeAddress:data.completeAddress,
//             country: data.country,
//             phoneNumber: data.phoneNumber,
//             province: data.province,
//             city: data.city,
//             postalCode: data.postalCode,
//             fullName: data.name,
//         },
//         packages: {
//             products:productToBeSent,
//         }
//     }
//     // console.log(order);
//     try {
//         const response = await sanityClient.create(order);
//         console.log("Created at :", response._createdAt);
//         return "success";
//     } catch (err) {
//         console.log(err);
//         return "failure"
//     }
// }

// export const POST = async (req:NextRequest) => {
//     const data = await req.json();
//     // console.log(data)
//     const response = await createOrder(data);

//     if(response === "success") {
//         return NextResponse.json({ message: "Order placed successfully" });
//     }else {
//         return NextResponse.json({ message: "Please refresh the page and order again" });
//     }   
// }


import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface Order {
    name: string;
    email: string;
    phoneNumber: string;
    completeAddress: string;
    country:string;
    province: string;
    city: string;
    postalCode: string;
    accountNumber: string;
    cardNumber:string;
    expirationDate: string;
    CVV:string;
    description: string;
    amountPayable:string;
    packages: [
        {
            id:string;
            quantity:number;
            product_name:string;
        }
    ]
  }



const createOrder = async (data:Order) => {
    const response = await supabase.from("ComfortyOrders").insert(
        [
            {
                customer_name: data.name,
                customer_email: data.email,
                customer_phonenumber: data.phoneNumber,
                complete_address: data.completeAddress,
                country:data.country,
                province: data.province,
                city: data.city,
                postal_code: data.postalCode,
                account_number: data.accountNumber,
                card_number:data.cardNumber,
                expiry_date: data.expirationDate,
                cvv:data.CVV,
                delivery_instructions: data.description,
                amount_payable:data.amountPayable.replace("$",""),
                packages: data.packages,
              }
        ]
    );
    if(response.error) {
        return response.error.message;
    }
    console.log(response.data);
    return 'Order Placed Successfully'
    
}

export const POST = async (req:NextRequest) => {
    const data = await req.json();
    // console.log(data);
    
    const response = await createOrder(data);
    return NextResponse.json({message:"Order placed successfully"})
}

/**
 Creating policies:
 Select :
  CREATE POLICY "Allow read access to anon"
ON public."ComfortyOrders"
FOR SELECT USING (true);

insert :
 CREATE POLICY "Allow order form submission"
ON public."ComfortyOrders"
FOR INSERT
WITH CHECK (true);
 */