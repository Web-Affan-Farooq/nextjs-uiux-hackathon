"use client";

import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  

const FAQ_card = () => {

    const [toogleStatus, settoogleStatus] = useState(false);

    return (
        <Accordion type="single" collapsible className='max-sm:w-[80vw] sm:w-[430px] md:w-[400px] lg:w-[480px] xl:w-[620px] p-2 rounded-lg shadow-card'>
  <AccordionItem value="item-1">
    <AccordionTrigger className='font-bold text-[17px]'>How can we get in touch with you ?</AccordionTrigger>
    <AccordionContent className='py-[5px]'>
        <p className='text-[16px] leading-[24px] transition-all duration-1000 ease-in-out font-normal text-[#4F4F4F]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem? 
        </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>

    )
}

export default FAQ_card