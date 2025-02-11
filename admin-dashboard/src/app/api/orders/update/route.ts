// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import sanityClient from "@/lib/sanity";
// import { permission } from "@/lib/permissions";

// const updateData = async (id: string, method: string) => {
//     // list: ["Completed Successfully", "Rejected", "Processing", "Delivered"],
//     if (method === "Rejected" && permission === "Allow functions") {
//         try {
//             const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Rejected" }).commit();
//             console.log(response);
//             return "Success";
//         } catch (err) {
//             console.error(err);
//             return "Failed";
//         }
//     } else if (method === "Completed Successfully" && permission === "Allow functions") {
//         try {
//             const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Completed Successfully" }).commit();
//             console.log(response);
//             return "Success";
//         } catch (err) {
//             console.error(err);
//             return "Failed";
//         }
//     } else if (method === "Processing" && permission === "Allow functions") {
//         try {
//             const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Processing" }).commit();
//             console.log(response);
//             return "Success";
//         } catch (err) {
//             console.error(err);
//             return "Failed";
//         }
//     } else if (method === "Delivered" && permission === "Allow functions") {
//         try {
//             const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": "Delivered" }).commit();
//             console.log(response);
//             return "Success";
//         } catch (err) {
//             console.error(err);
//             return "Failed";
//         }
//     } else if (method && permission === "View only") {
//         return "Permissions prohibitted"
//     } else if (permission === "Prohibitted") {
//         return "Blocked by admin"
//     }

// }

// export const PATCH = async (req: NextRequest) => {
//     const data = await req.json();
//     console.log(data);
//     console.log(permission);

//     const response = await updateData(data.id, data.method);
//     if (response === "Success") {
//         return NextResponse.json({ message: "Data updated successfully" });
//     } else if (response === "Permissions prohibitted") {
//         return NextResponse.json({ message: "No actions allowed in view only mode" });
//     }
//     else if (response === "Blocked by admin") {
//         return NextResponse.json({ message: "Blocked by admin" });
//     }
//     else if (response === "Failed") {
//         return NextResponse.json({ message: "Failed to fetch resource.Try later" });
//     }
//     else {
//         return NextResponse.json({ message: "Error While fetching" });
//     }
// }

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import sanityClient from "@/lib/sanity";

const updateData = async (id: string, method: string) => {
    // list: ["Completed Successfully", "Rejected", "Processing", "Delivered"],
        try {
            const response = await sanityClient.patch(id).set({ "paymentInfo.orderStatus": method }).commit();
            // console.log(response);
            return "Success";
        } catch (err) {
            console.error(err);
            return "Failed";
        }
}

export const PATCH = async (req:NextRequest) => {
    const {id, method} = await req.json();
    const response = await updateData(id, method);
    return NextResponse.json({message:"Data updated successfully"});
}