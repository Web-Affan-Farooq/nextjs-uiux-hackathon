import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

const updateData = async (id: string, method:string) => {
    // list: ["Completed Successfully", "Rejected", "Processing", "Delivered"],
    if(method === "Rejected") {
        try {
            const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Rejected" }).commit();
            console.log(response);
            return "Success";
        } catch (err) {
            console.error(err);
            return "Failed";
        }
    }else if(method === "Completed Successfully") {
        try {
            const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Completed Successfully" }).commit();
            console.log(response);
            return "Success";
        } catch (err) {
            console.error(err);
            return "Failed";
        }
    }else if(method === "Processing") {
        try {
            const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Processing" }).commit();
            console.log(response);
            return "Success";
        } catch (err) {
            console.error(err);
            return "Failed";
        }
    }else if(method === "Delivered"){
        try {
            const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Delivered" }).commit();
            console.log(response);
            return "Success";
        } catch (err) {
            console.error(err);
            return "Failed";
        }
    }
}

export const PATCH = async (req: NextRequest) => {
    const data = await req.json();
    console.log(data);
    const response = await updateData(data.id, data.method);
    if(response === "Success") {
        return NextResponse.json({ message: "Data updated successfully" });
    }else {
        return NextResponse.json({ message: "Error While fetching" });
    }
}