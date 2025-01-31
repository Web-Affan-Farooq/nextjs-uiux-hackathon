// ------------->  Backend route for handling user info coming from checkout form

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

const createOrder = async () => { // take data from parameters

    let order = {
        _type:"order",
        paymentInfo: {
            CVV: "hjkfggf",
            cardHolderName: "Muhammad affan",
            amountPayable: "300",
            description: "jjlksjdfkjdlkfjdlkfjldkjlkdjglkfd;jglkjfkgljfdlkgjfdljgkljkljkldjflgkfjdlkgjfklgjklfjgkljgkl;fj;gklj;fdlkgj;fdlgjlkjglkfjlgkjdlgj;klfdj;glkjfdlkgjfdlkjglgjdlkfdjgklfdjlgkjfdjgljkldfjglfjljljllk",
            orderStatus: "Completed Successfully",
            cardNumber: "989038904834",
            expirationDate: "12 Feb 2025"
        },
        shippingInfo: {
            email: "affanamir903@gmail.com",
            completeAddress: "R430 Sector 14-B Shadman Town Karachi",
            country: "Pakistan",
            phoneNumber: "03312861014",
            province: "Sindh",
            city: "Karachi",
            postalCode: "75850",
            fullName: "Muhammad Affan",
        },
        packages: {
            products: [
                {
                    productName: "Wooden Chair",
                    productQuantityRequired: 4,
                    productId: "124d7920-ee7b-4841-93bd-554c972b2237",
                },
                {
                    productName: "Leather Sofa",
                    productQuantityRequired: 4,
                    productId: "1258799f-0fa5-4c08-9f74-8add01acd466",
                },
            ]
        }
    }
    
    try {
        const response = await sanityClient.create(order);
        console.log(response._createdAt);
        return "success";
    } catch (err) {
        console.log(err);
        return "failure"
    }

}

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    console.log(data);
    // let response = await createOrder();
    // console.log(response);
    return NextResponse.json({ message: "confirmation from server" });
}