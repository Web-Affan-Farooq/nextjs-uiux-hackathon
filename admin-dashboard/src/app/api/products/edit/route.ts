import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { permission } from "@/lib/permissions";
import { Product } from "@/@types/Products";
import sanityClient from "@/lib/sanity";

const editProductInDatasets = async (data: Product) => {
    const productData = {
        image: {
            asset: {
                url: "https://cdn.sanity.io/images/4nyqx9qe/production/bc57d9eb75a06fd3029ea0a2d442cba3c2e6fa5f-424x424.svg",
                _id: "image-bc57d9eb75a06fd3029ea0a2d442cba3c2e6fa5f-424x424-svg"
            }
        },

        shortDescription: "Improves posture and balance ",
        longDescription: [
            {
                style: "normal",
                children: [
                    {
                        text: ""
                    }
                ]
            }
        ],
        ratingsInCount: 129,
        productName: "Wooden Chair",
        discount: 0,
        quantityAvailable: 9,
        warranty: null,
        tags: ["Featured"],
        category: "Chairs",
        ratings: 4,
        weight: 5,
        price: 350,
    }
}
export const PATCH = async (req: NextRequest) => {
    const data = await req.json();
    console.log("edit product api response");
    return NextResponse.json({ message: "Form submitted successfully" });
}