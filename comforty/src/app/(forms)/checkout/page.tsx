import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Form from '@/components/(Checkout)/Form';

const Checkout = () => {
    return (
        <main>
            <article>
                <br /><br /><br />
                <section className='flex flex-row flex-wrap justify-between items-start'>

                    <Image src={"/images/checkout/checkout-banner.svg"} alt='banner' width={400} height={400} className='w-[400px] h-[500px] max-md:h-[400px]' />
                    <Form/>

                            {/* <fieldset>
                                <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Customer information</legend>
                                <div className='px-5 py-1 flex flex-col gap-2'>
                                    <label htmlFor="Enter your name" id='customer-name' className='text-[15px] text-gray-500'>Enter your name:</label>
                                    <div> 
                                        <input type="text" name='customerName' id='customer-name' required placeholder='Your name' className='rounded-md px-[20px] text-[15px] py-[10px] w-[310px] border-2 border-solid border-black' />
                                    </div>
                                </div>

                                <div className='px-5 py-1 flex flex-col gap-2'>
                                    <label htmlFor="Enter your name" id='customer-email' className='text-[15px] text-gray-500'>Your email:</label>
                                    <div>
                                        <input type="email" name='customerEmail' id='customer-email' required placeholder='abcd@gmail.com' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' />
                                    </div>
                                </div>

                                <div className='px-5 py-1 flex flex-col gap-2'>
                                    <label htmlFor="Enter your phonenumber" id='customer-phonenumber' className='text-[15px] text-gray-500'>Your phonenumber:</label>
                                    <div>
                                        <input type="tel" name='customerPhone' id='customer-phonenumber' required placeholder='0000-0000000' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' />
                                    </div>
                                </div>
                            </fieldset> */}

                            {/* <fieldset>
                                <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Shipment details</legend>
                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="Country" id='country' className='text-[15px] text-gray-500'>Select country</label>
                                    <select name="country" id="country" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]'>
                                        <option value="Pakistan">Pakistan</option>
                                    </select>
                                </div>

                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="Country" id='country' className='text-[15px] text-gray-500'>Select province</label>
                                    <select name="province" id="province" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]'>
                                        <option value="Sindh">Sindh</option>
                                    </select>
                                </div>
                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="Country" id='country' className='text-[15px] text-gray-500'>Select city</label>
                                    <select name="city" id="city" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]'>
                                        <option value="Karachi">Karachi</option>
                                    </select>
                                </div>

                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="Country" id='country' className='text-[15px] text-gray-500'>Enter postal code</label>
                                    <input type="text" name='postalCode' id='postal-code' placeholder='Your postal code' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' />
                                </div>
                            </fieldset> */}

                            {/* <fieldset>
                                <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Payment credentials</legend>

                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="card holder name" id='card-holder-name' className='text-[15px] text-gray-500'>Enter your name:</label>
                                    <div>
                                        <input type="text" name='cardHolderName' id='card-holder-name' required placeholder="Card holder's name" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' />
                                    </div>
                                </div>

                                <div className='px-5 py-1 flex flex-col gap-3'>
                                    <label htmlFor="Enter account number" id='account-number' className='text-[15px] text-gray-500'>Account number:</label>
                                    <div>
                                        <input type="text" name='accountNumber' id='account-number' required placeholder="xxx-xxx-xxx" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' />
                                    </div>
                                </div>

                            </fieldset> */}
                            {/* <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type='submit'>
                                <span>Next</span>
                            </Button> */}
                </section>
                <br /><br /><br />
            </article>
        </main>
    )
}

export default Checkout;