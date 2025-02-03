// import React from 'react';
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"


// const Example = () => {
//     return (
//         <div>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//             <Carousel className='border-2 border-solid border-black w-[500px]'>
//             {/* <CarouselPrevious /> */}
//                 <CarouselContent>
//                     <CarouselItem className='bg-blue'></CarouselItem>
//                     <CarouselItem>carousel-2</CarouselItem>
//                     <CarouselItem>carousel-3</CarouselItem>
//                 </CarouselContent>
//                 {/* <CarouselNext /> */}
//             </Carousel>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br />
//         </div>
//     )
// }

// export default Example;

import React from 'react';
import Card from '@/components/Cards/Card-products/Card';

const Example = () => {
  return (
    <div>
      <div className='w-[95vw] border-2 border-solid border-black m-auto overflow-x-auto overflow-y-hidden whitespace-nowrap'>

        <div className='flex flex-shrink-0 justify-between'>
        <div className='flex flex-row flex-nowrap justify-center items-center gap-4'>
        <Card image={"/images/section-3-home/2.svg"} name='Card tihuihruhgurg rehgruiriojgorejgfdlgkgtrtle' price={30} link='/'/>
        <Card image={"/images/section-3-home/3.svg"} name='Card title' price={30} link='/'/>
        <Card image={"/images/section-3-home/1.svg"} name='Card title' price={30} link='/'/>
        <Card image={"/images/section-3-home/4.svg"} name='Card title' price={30} link='/'/>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Example