import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const DELETE = async (req:NextRequest) => {
    const data = await req.json();
    console.log("delete order api response");
    return NextResponse.json({message:"Form submitted successfully"});
}