import { NextRequest, NextResponse } from "next/server";
import Products from "../../../../../products.json";

interface Params {
    params:Promise<{id:string}>
}

export async function GET (req:NextRequest,{params}:Params) {
    const id = Number((await params).id);
    return Response.json({data:Products[id-1]});
}