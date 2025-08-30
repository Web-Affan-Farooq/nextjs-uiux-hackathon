// ------------->  Backend route for handling user info coming from checkout form

// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import sanityClient from "@/lib/sanity";

// interface Contact {
//     name: string;
//     email: string;
//     subject:string;
//     message:string;
//   }

// const createOrder = async (data:Contact) => { // take data from parameters
//     const contactInfo = {
//         _type:"contact",
//         customerName:data.name,
//         customerEmail:data.email,
//         messageSubject:data.subject,
//         customerMessage:data.message
//     }
    
//     try {
//         const response = await sanityClient.create(contactInfo);
//         console.log("Created at :", response._createdAt);
//         return "success";
//     } catch (err) {
//         console.log(err);
//         return "failure"
//     }
// }

// export const POST = async (req: NextRequest) => {
//     const data:Contact= await req.json();
//     console.log(data);
    
//     // console.log(data);
//     let response = await createOrder(data);

//     if(response === "success") {
//         console.log("Data added to contact successfully");
//         // NextResponse.redirect("/products");
//         return NextResponse.json({ message: "Form submitted successfully" });
//     }else {
//         // console.log("Error while processing");
//         // NextResponse.redirect("/products");
//         return NextResponse.json({ message: "Please refresh the page and order again" });
//     }   
// }

import { supabase } from "@/lib/supabase";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Contact {
    name:string;
    email:string;
    subject:string;
    message:string;
}

const createContact = async (data:Contact) => {
    const response = await supabase.from("ComfortyFormSubmissions").insert([
        {
            customer_name:data.name,
            customer_email:data.email,
            subject:data.subject,
            message:data.message
        }
    ]);
    if(response.error) {
        console.error(response.error.message);
    }
    return "Contact form submitted successfully";
}
export const POST = async (req:NextRequest) => {
    const data = await req.json();
    const response = await createContact(data);
    return NextResponse.json({message:"Form submitted successfully"});
}