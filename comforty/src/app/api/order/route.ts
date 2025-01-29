// ------------->  Backend route for handling user info coming from checkout form

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export const POST = async (req:NextRequest) => {
    const data = await req.json();
    console.log(data);
    return NextResponse.json({message:"confirmation from server"});
}