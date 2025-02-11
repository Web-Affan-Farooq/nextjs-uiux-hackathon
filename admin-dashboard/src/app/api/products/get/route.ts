import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

const getData = async (startingIndex:number, endingIndex:number) => {
    try {
        const q = `*[_type == "product"][${startingIndex}..${endingIndex}]{
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
                            // const data = await response;
                            return response
    } catch (err) {
        console.error(err);
    }
}

export const POST = async (req:NextRequest) => {
    const {startIndex, endIndex} = await req.json();
    // console.log(data);
    const response = await getData(startIndex, endIndex);
    return NextResponse.json({data:response});
}