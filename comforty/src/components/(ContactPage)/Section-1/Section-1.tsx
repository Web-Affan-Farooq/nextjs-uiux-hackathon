import React from 'react';
import Image from 'next/image';

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

                <form action="/" className='flex flex-col flex-nowrap gap-5'>

                    <div className='w-[393px]'>
                        <label htmlFor="Your name" className='text-black font-bold text-left' id='name'>Your Name</label><br />
                        <input type="text" name='name' id='name' placeholder='abc' className='w-full px-[20px] py-[10px] rounded-md' required />
                    </div>

                    <div className=' w-[393px]'>
                        <label htmlFor="Enter email" className='text-black font-bold text-left' id='email'>Email Address</label><br />
                        <input type="email" name='email' id='email' placeholder='abc@gmail.com' className='w-full  px-[20px] py-[10px] rounded-md' required />
                    </div>

                    <div className=' w-[393px]'>
                        <label htmlFor="Subject" className='text-black font-bold text-left' id='subject'>Subject</label><br />
                        <input type="text" name='subject' id='subject' placeholder='subject' className='w-full px-[20px] py-[10px] rounded-md' required />
                    </div>

                    <div className='w-[393px]'>
                        <label htmlFor="Enter your message" className='text-black font-bold text-left' id='message'>Message</label><br />
                        <textarea name="message" id="message" placeholder='abc@gmail.com' className='w-full px-[20px] py-[10px] rounded-md' required></textarea>
                    </div>

                    <div>
                        <button type="submit" className='py-[14px] px-[24px] rounded-[8px] bg-blue font-bold text-[16px] text-white max-md:px-[20px] max-md:py-[10px]'>
                            <span>Submit</span> <span><i className="fa-solid fa-arrow-right"></i></span>
                        </button>
                    </div>

                </form>

            </div>

        </section>
    )
}

export default Section_1