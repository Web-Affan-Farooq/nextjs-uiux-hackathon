import React from 'react';
import Image from 'next/image';

const Section_5 = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-[32px] text-purple font-semibold text-center">
        Explore new and popular styles
      </h1>
      <br /><br />

      <div className="flex items-center justify-center">
        <section className="grid grid-rows-2 grid-cols-4 gap-6 max-w-full">
          <div className="row-span-2 col-span-2 w-full max-w-[648px] aspect-square">
            <Image
              src={"/images/section-5-home/3.svg"}
              alt="furniture image"
              width={648}
              height={648}
              className="object-cover w-full h-full"
            />
          </div>

          <div className=' w-full aspect-square max-w-[312px]'>
             <Image src={"/products/5.svg"} alt='furniture image' width={312} height={312} className="object-cover w-full h-full"/>
           </div>
           <div className=' w-full aspect-square max-w-[312px]'>
             <Image src={"/products/6.svg"} alt='furniture image' width={312} height={312} className="object-cover w-full h-full" />
           </div>
           <div className=' w-full aspect-square max-w-[312px]'>
             <Image src={"/products/7.svg"} alt='furniture image' width={312} height={312} className="object-cover w-full h-full" />
           </div>
           <div className=' w-full aspect-square max-w-[312px]'>
             <Image src={"/products/10.svg"} alt='furniture image' width={312} height={312} className="object-cover w-full h-full" />
           </div>
        </section>
      </div>
    </div>
  );
};

export default Section_5;