import { NextRequest, NextResponse } from "next/server";
import Products from "../../../../products.json";

export async function GET(req:NextRequest) {

    return Response.json({data:Products});
}