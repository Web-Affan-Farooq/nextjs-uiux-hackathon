import React from 'react';
import Image from 'next/image';

const Section_1 = () => {
    return (
        <section className=' py-[80px]'>
            <h1 className='text-black font-bold text-[48px] leading-[56px] text-center'>Questions Looks Here</h1>
            <br />
            <p className='text-[#4F4F4F] text-[16px] font-normal leading-[24px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

            <br /><br /><br />
            <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>
                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>What types of chairs do you offer?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>

                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>How can we get in touch with you?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>

                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>What will be delivered? And When?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>

                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>Can I try a chair before purchasing?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>

                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>How do I clean and maintain my Comforty chair?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>

                <div className='w-[648px] p-6'>
                    <div className='flex flex-row flex-nowrap justify-between items-center'>
                        <h1 className='font-bold text-[18px] leading-[26px]'>What types of chairs do you offer?</h1>
                        <Image src={"/icons/Plus.svg"} width={24} height={24} alt='collapse' className='object-cover' />
                    </div>
                    <br />
                    <p className='text-[16px] leading-[24px] font-normal text-[#4F4F4F]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                </div>
            </div>


        </section>
    )
}

export default Section_1