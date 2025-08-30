import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { permission } from "@/lib/permissions";
import sanityClient from "@/lib/sanity";

const deleteProduct = async (id:string) => {
    try {
        const response = await sanityClient.delete(id);
        console.log("deleted at :",response._createdAt);
        
        return "Product deleted successfully";
    }
    catch(err) {
        console.error(err);
        return "Product deletion failed";
    }
}
export const DELETE = async (req:NextRequest) => {
    const data = await req.json();
    // const response = await deleteProduct(data.id);
    console.log(data.id);
    // console.log("delete product api response");
    return NextResponse.json({message:"Product deleted successfully"});
}