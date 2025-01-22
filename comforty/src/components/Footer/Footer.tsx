import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button_large_green from '../Buttons/Button-large-green';

const Footer = () => {
    return (
        <footer className='flex flex-row flex-wrap justify-evenly items-start 2xl:gap-5 xl:gap-5 w-[80vw] m-auto'>
            {/*child-1 */}
            <div className='w-[350px] flex flex-col flex-nowrap gap-5 justify-center items-start my-5'>
                <div>
                    <Image src={"/images/logo.svg"} alt='Conforty' width={166} height={40} className='object-cover' />
                </div>
                <p className='text-[16px] font-normal leading-[24px] text-left text-purple'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                    Cras egestas purus </p>

                <div className='flex flex-row flex-wrap gap-5 justify-start items-center'>
                    <div>
                        <Image src={"/icons/facebook.svg"} alt='Facebook' width={20} height={20} className='object-cover' />
                    </div>
                    <div>
                        <Image src={"/icons/instagram.svg"} alt='instagram' width={20} height={20} className='object-cover' />
                    </div>
                    <div>
                        <Image src={"/icons/pintrest.svg"} alt='twitter' width={20} height={20} className='object-cover' />
                    </div>
                    <div>
                        <Image src={"/icons/youtube.svg"} alt='youtube' width={20} height={20} className='object-cover' />
                    </div>
                    <div>
                        <Image src={"/icons/pintrest.svg"} alt='Pintrest' width={20} height={20} className='object-cover' />
                    </div>

                </div>
            </div>

            {/* child-2*/}
            <div className='w-[150px] flex flex-col flex-nowrap gap-2 justify-center items-start my-5'>
                <div>
                    <h1 className='text-[14px] font-normal leading-[15px] tracking-[6%] text-[#9A9CAA]'>CATEGORY</h1>
                </div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Sofa</Link>
                </div>
                <div><Link href={"/"} className='text-black hover:text-blue'>Armchair</Link></div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Wing Chair</Link></div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Desk Chair</Link>
                </div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Wooden Chair</Link>
                </div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Park Bench</Link>
                </div>
            </div>

            {/*child-3 */}
            <div className=' w-[150px] flex flex-col flex-nowrap gap-2 justify-center items-start text-left my-5'>
                <div>
                    <h1 className='text-[14px] font-normal leading-[15px] tracking-[6%] text-[#9A9CAA]'>SUPPORT</h1>
                </div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Help and support</Link>
                </div>
                <div><Link href={"/"} className='text-black hover:text-blue'>Terms and conditions</Link></div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Privacy policy</Link></div>
                <div>
                    <Link href={"/"} className='text-black hover:text-blue'>Help</Link>
                </div>
            </div>
            {/*child-4 */}
            <div className='w-[424px] h-[142px] flex flex-col flex-nowrap gap-4 my-5'>
                <h1 className='text-[14px] font-normal leading-[15px] tracking-[6%] text-[#9A9CAA]'>SUPPORT</h1>
                <div className='flex flex-row flex-nowrap max-md:flex-wrap max-md:justify-center max-md:gap-3'>
                    <input type="text" name='email' id='email' placeholder='Your email' className='rounded-[8px] w-[270px] px-[10px] py-[14px]' />
                    <Button_large_green text='Subscribe' />
                </div>
                <p className='text-[#272343] font-normal leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
        </footer>
    )
}

export default Footer;