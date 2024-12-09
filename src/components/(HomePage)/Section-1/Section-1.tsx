import React from 'react';
import Image from 'next/image';
import Button_large_green from '../../Buttons/Button-large-green';

const Section_1 = () => {
    return (
        <section className='flex flex-row flex-wrap justify-evenly items-center 2xl:gap-0 2xl:justify-evenly xl:justify-evenly gap-7 lg:justify-center lg:gap-14 md:gap-5 md:justify-center '>{/*xl:justify-center xl:gap-2 md:bg-purple lg:justify-center lg:gap-3 */}
            {/* child-1 */}
            <div className=' 2xl:w-[557px] grid grid-row-3 grid-cols-1 gap-9 lg:w-[450px] md:w-[400px] sm:p-10 max-sm:p-7 max-md:p-2'>{/* md:w-[450px] */}
                <span className='text-purple text-[14px] font-normal leading-[14px] tracking-[12%]'>WELCOME TO CHAIRY</span>
                <h1 className='font-bold text-[60px] leading-[66px] max-md:text-[48px] max-md:leading-[50px]'>
                    Best Furniture Collection for your interior.
                </h1>
                <div>
                <Button_large_green text={"Shop Now"} />
                </div>

            </div>

            {/* child-2 */}

            <div className=''>
                <div>
                    <Image src={"/images/hero/hero-banner.svg"} alt='hero banner' width={434} height={534} className='xl:w-[350px] xl:h-[500px] lg:w-[350px] lg:h-[500px] md:w-[300px] md:h-[500px] sm:w-[300px] sm:h-[500px] max-md:w-[300px] max-md:h-[350px]'/>{/*lg:w-[350px] lg:h-[450px] md:w-[300px] md:h-[400px] */}
                </div>
            </div>
        </section>
    )
}

export default Section_1;