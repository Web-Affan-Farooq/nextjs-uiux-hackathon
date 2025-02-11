import React from 'react';
import sanityClient from '@/lib/sanity';
import { Order } from '@/@types/Orders';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TableRows from './TableRows';


const Orders = async () => {
    const q = `
    *[_type == "order"]{
  _id,
  packages,
  _updatedAt,
  paymentInfo,
  shippingInfo,
}
    `;
    const response: Order[] = await sanityClient.fetch(q);

    const calculateSum = () => {
        let sum = 0;
        response.map((data: Order) => {
            return sum += parseInt(data.paymentInfo.amountPayable.replace("$", ""))
        });
        return sum;
    }

    return (
        <div>
            <h1 className='font-bold text-[24px]'>Orders report:</h1>
            <br />
            <Table>
                <TableCaption>A list of your recent orders.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Order no</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        response.map((data: Order, index: number) => {
                            return <TableRows data={data} key={index} index={index} />
                        })
                    }
                    <TableRow>
                        <TableCell className="font-bold">Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell className=''></TableCell>
                        <TableCell className="text-right">${calculateSum()}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Orders