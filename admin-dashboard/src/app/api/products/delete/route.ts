import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { permission } from "@/lib/permissions";

export const DELETE = async (req:NextRequest) => {
    const data = await req.json();
    console.log("delete product api response");
    return NextResponse.json({message:"Form submitted successfully"});
}