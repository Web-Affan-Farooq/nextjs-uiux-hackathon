import React from 'react'

const Checkout = () => {
  return (
    <main>
        <article>
            <section className='border-2 border-solid border-black'>
                <form action="" className='border-2 border-solid border-black'>
                    <fieldset>
                    <legend className='text-[15px] text-gray-500 decoration-4 decoration-blue underline'>Customer information</legend>

                    <div className='px-5 py-1'>
                    <label htmlFor="Enter your name" id='customer-name' className='text-[15px] text-gray-500'>Enter your name:</label>
                    <br />
                    <input type="text" name='customerName' id='customer-name' required placeholder='Your name' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[5px]'/>
                    </div>

                    <div className='px-5 py-1'>
                    <label htmlFor="Enter your name" id='customer-email' className='text-[15px] text-gray-500'>Your email:</label>
                    <br />
                    <input type="email" name='customerEmail' id='customer-email' required placeholder='abcd@gmail.com' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[5px]'/>
                    </div>

                    <div className='px-5 py-1'>
                    <label htmlFor="Enter your phonenumber" id='customer-phonenumber' className='text-[15px] text-gray-500'>Your phonenumber:</label>
                    <br />
                    <input type="tel" name='customerPhone' id='customer-phonenumber' required placeholder='0000-0000000' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[5px]'/>
                    </div>
                    </fieldset>

                    <fieldset>
                    <legend>Shipment details</legend>
                    <label htmlFor="Country" id='country'>Select country</label>
                    <select name="country" id="country">
                        <option value="Pakistan">Pakistan</option>
                    </select>

                    <label htmlFor="Country" id='country'>Select province</label>
                    <select name="province" id="province">
                        <option value="Sindh">Sindh</option>
                    </select>

                    <label htmlFor="Country" id='country'>Select city</label>
                    <select name="city" id="city">
                        <option value="Karachi">Karachi</option>
                    </select>

                    <label htmlFor="Country" id='country'>Select city</label>
                    <input type="text" name='postalCode' id='postal-code' placeholder='Your postal code' />
                    </fieldset>

                    <fieldset>
                        <legend>Payment credentials</legend>

                        <div className='px-5 py-1'>
                    <label htmlFor="card holder name" id='card-holder-name' className='text-[15px] text-gray-500'>Enter your name:</label>
                    <br />
                    <input type="text" name='cardHolderName' id='card-holder-name' required placeholder="Card holder's name" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[5px]'/>
                    </div>

                        <div className='px-5 py-1'>
                    <label htmlFor="Enter account number" id='account-number' className='text-[15px] text-gray-500'>Account number:</label>
                    <br />
                    <input type="text" name='accountNumber' id='account-number' required placeholder="xxx-xxx-xxx" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[5px]'/>
                    </div>

                                       </fieldset>
                </form>
            </section>
        </article>
    </main>
  )
}

export default Checkout;