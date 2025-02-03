import React from 'react';
import Image from 'next/image';
import Form from '../Form/Form';

const Section_1 = () => {
    return (
        <section className=' py-[90px]'>
            {/*child-1 */}
            <h1 className='text-black text-[36px] leading-[54px] text-center font-semibold'>Get In Touch With Us</h1>
            <div className='w-[80vw] m-auto'>
            <p className='font-normal text-[#9F9F9F] text-[16px] leading-[24px] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            {/*child-2 */}

            <div className='py-[70]  flex flex-row flex-wrap gap-10 justify-center items-start'>

                <div className='flex flex-col flex-nowrap gap-5'>
                    <div className='flex flex-row flex-nowrap gap-5 justify-start items-center w-[393px] text-left'>
                        <Image src={"/icons/location.svg"} alt='address' width={23} height={23} className='object-cover' />
                        <div>
                            <h1 className='text-[24px] text-black font-medium leading-[34px] text-left'>Address</h1>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>


                    <div className='flex flex-row flex-nowrap gap-5 justify-start items-center w-[393px] text-left'>
                        <Image src={"/icons/phone.svg"} alt='phone' width={23} height={23} className='object-cover' />
                        <div>
                            <h1 className='text-[24px] text-black font-medium leading-[34px] text-left'>Phone</h1>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    <div className='flex flex-row flex-nowrap gap-5 justify-start items-center w-[393px] text-left'>
                        <Image src={"/icons/clock.svg"} alt='address' width={23} height={23} className='object-cover' />
                        <div>
                            <h1 className='text-[24px] text-black font-medium leading-[34px] text-left'>Working Time</h1>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                {/* input container */}

                <Form/>

            </div>

        </section>
    )
}

export default Section_1