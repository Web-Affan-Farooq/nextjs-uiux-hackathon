import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const data = await req.json();
    console.log("new product api response");
    return NextResponse.json({message:"Form submitted successfully"});
}