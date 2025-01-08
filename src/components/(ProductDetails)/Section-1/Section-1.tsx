import React from 'react';
import Image from 'next/image';

const Section_1 = ({name, description, price, image}: {name:string; image:string; description:string; price:string}) => {
    return (
        <section className='flex flex-row flex-wrap justify-center items-center xl:justify-center xl:items-center sm:justify-start sm:p-5 sm:items-center max-sm:justify-start max-sm:p-5 max-sm:items-center'>

            <div className=''>
                <Image src={image} alt='furniture picture' width={400} height={400} className='object-cover rounded-[10px] 2xl:w-[400px] 2xl:h-[400px] xl:w-[400px] xl:h-[400px] lg:w-[400px] lg:h-[400px]  md:w-[300px] md:h-[300px] sm:w-[270px] sm:h-[270px]' />
            </div>

            <div className='flex flex-col p-4 lg:w-[50vw] md:w-[60vw] sm:w-[80vw]'>
                <h1 className='font-bold text-[60px] leading-[66px]'>{name}</h1>
                <br />
                <div>
                    <span className='px-4 py-2 bg-blue rounded-[60px] text-white font-bold text-[16px]'>{price}</span>
                </div>
                <br />
                <p className='font-normal text-purple'>{description}</p>
                <br />
                <div>
                    <button type="button" className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center gap-2 px-[20px] py-[10px]'>
                        <Image src={"/icons/cart.svg"} alt='cart' width={20} height={20} className='' />
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Section_1