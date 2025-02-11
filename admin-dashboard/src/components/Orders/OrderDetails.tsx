"use client";

import React, { useEffect, useState } from 'react';
import { Order } from '@/@types/Orders';

const OrderDetails = ({ data }: { data: Order }) => {
  const [completedOrder, setcompletedOrder] = useState(false);
  const [rejectedOrder, setrejectedOrder] = useState(false);

  /*
  list: ["Completed Successfully", "Rejected", "Processing", "Delivered"],
   */
  const getData = async (status:string) => {
    try {
      const response = await fetch("/api/orders/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: data._id, method: status })
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (rejectedOrder) {
      getData("Rejected");
    }
  }, [rejectedOrder, data._id]);

  useEffect(() => {
    if (completedOrder) {
      getData("Completed Successfully");
    }
  }, [completedOrder, data._id]);

  return (
    <div className=''>
      {/* <Order_details/> */}
      <div className='bg-white rounded-md p-3 break'>

        <h1 className='font-bold text-[24px]'>Order Details:</h1>
        <br />
        <div className='flex flex-col flex-wrap justify-start items-start gap-2 break'>
          <h2 className='py-[10px] font-bold text-[20px]'>Customer Information :</h2>
          <div className='break-all'>
            <span className='font-bold'>Full name</span>:<span>{data.shippingInfo.fullName}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Email</span>:<span>{data.shippingInfo.email}</span>
          </div>

          <div className='break-all'>
            <span className='font-bold'>Phonenumber</span>:<span>{data.shippingInfo.phoneNumber}</span>
          </div>

        </div>

      </div>

      <div className='bg-white rounded-md p-3'>
        <br />
        <div className='flex flex-col flex-wrap justify-start items-start gap-2 break'>
          <h2 className='py-[10px] font-bold text-[20px]'>Shipment Information</h2>
          <div className='break-all'>
            <span className='font-bold'>Country</span>:<span>{data.shippingInfo.country}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Province</span>:<span>{data.shippingInfo.province}</span>
          </div>

          <div className='break-all'>
            <span className='font-bold'>City</span>:<span>{data.shippingInfo.city}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Postal Code</span>:<span>{data.shippingInfo.postalCode}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Address</span>:<span>{data.shippingInfo.completeAddress}</span>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-md p-3'>
        <br />
        <div className='flex flex-col flex-wrap justify-start items-start gap-2 break'>
          <h2 className='py-[10px] font-bold text-[20px]'>Payment Information</h2>
          <div className='break-all'>
            <span className='font-bold'>Account number</span>:<span>{data.paymentInfo.accountNumber}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Card holder</span>:<span>{data.paymentInfo.cardHolderName}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>CVV</span>:<span>{data.paymentInfo.CVV}</span>
          </div>

          <div className='break-all'>
            <span className='font-bold'>Card number</span>:<span>{data.paymentInfo.cardNumber}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Delivery instructions</span>:<span>{data.paymentInfo.description}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Expiry Date</span>:<span>{data.paymentInfo.expirationDate}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Order status</span>:<span>{data.paymentInfo.orderStatus}</span>
          </div>
          <div className='break-all'>
            <span className='font-bold'>Amount payable</span>:<span>{data.paymentInfo.amountPayable}</span>
          </div>
          <br />
          <div className='break-all flex flex-row flex-wrap justify-start items-start gap-3'>
            <button type="button" className='bg-blue-400 font-bold px-[20px] py-[10px] rounded-md' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setcompletedOrder(!completedOrder);
            }}>Completed</button>
            <button type="button" className='bg-blue-400 font-bold px-[20px] py-[10px] rounded-md' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setrejectedOrder(!rejectedOrder);
            }}>Reject</button>
          </div>

        </div>
      </div>

    </div>)
}

export default OrderDetails