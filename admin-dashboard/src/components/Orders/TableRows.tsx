"use client";
import React from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Order } from '@/@types/Orders';
import { useRouter } from 'next/navigation';

const TableRows = ({ data, index }: { data: Order, index: number }) => {
    const router = useRouter();

    return (
        <TableRow onClick={(e: React.MouseEvent<HTMLTableRowElement>) => {
            router.push(`/orders/${data._id}`);
        }}>
            <TableCell className="font-medium">{index+1}</TableCell>
            <TableCell>{data.paymentInfo.orderStatus}</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">{data.paymentInfo.amountPayable}</TableCell>
        </TableRow>
        )
}

export default TableRows