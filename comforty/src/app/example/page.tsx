import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Example = () => {
    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Carousel className='border-2 border-solid border-black w-[500px]'>
            {/* <CarouselPrevious /> */}
                <CarouselContent>
                    <CarouselItem className='bg-blue'></CarouselItem>
                    <CarouselItem>carousel-2</CarouselItem>
                    <CarouselItem>carousel-3</CarouselItem>
                </CarouselContent>
                {/* <CarouselNext /> */}
            </Carousel>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Example