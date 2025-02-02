// ------------->  Backend route for handling user info coming from checkout form

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

interface Checkout {
    name: string;
    phoneNumber: string;
    email: string;
    completeAddress: string;
    country: string;
    province: string;
    city: string;
    postalCode: string;
    cardNumber: string;
    accountNumber: string;
    expirationDate: string;
    CVV:string;
    amountPayable:string;
    description: string;
    packages: [
      {
        product_name: string;
        id: string;
        quantity: number
      },
      {
        product_name: string;
        id:string;
        quantity: number;
      }
    ]
  }

const createOrder = async (data:Checkout) => { // take data from parameters

    let order = {
        _type:"order",
        paymentInfo: {
            CVV: data.CVV,
            cardHolderName: data.name,
            amountPayable: data.amountPayable,
            description:data.description,
            orderStatus: "Processing",
            cardNumber: data.cardNumber,
            expirationDate: data.expirationDate,
            accountNumber:data.accountNumber,
        },
        shippingInfo: {
            email: data.email,
            completeAddress:data.completeAddress,
            country: data.country,
            phoneNumber: data.phoneNumber,
            province: data.province,
            city: data.city,
            postalCode: data.postalCode,
            fullName: data.name,
        },
        packages: {
            // products: data.packages.map((product) => { return product}),
            products:data.packages
        }
    }
    
    try {
        const response = await sanityClient.create(order);
        // console.log("Created at :", response._createdAt);
        return "success";
    } catch (err) {
        console.log(err);
        return "failure"
    }
}

export const POST = async (req: NextRequest) => {
    const data:Checkout= await req.json();
    // console.log(data);
    let response = await createOrder(data);

    if(response === "success") {
        // console.log("Data added to orders successfully");
        // NextResponse.redirect("/products");
        return NextResponse.json({ message: "Order placed successfully" });
    }else {
        // console.log("Error while processing");
        // NextResponse.redirect("/products");
        return NextResponse.json({ message: "Please refresh the page and order again" });
    }   
}