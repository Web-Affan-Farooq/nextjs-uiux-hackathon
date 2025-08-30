"use client";

import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { CartContext } from '@/context/CartContext';
import { CartProduct } from '@/@types/CartProduct';
import  personalInfoCheckoutSchema  from '@/validations/PersonalInfoCheckout';
import ShipmentInfoCheckoutSchema from '@/validations/ShipmentInfoCheckout';
import PaymentInfoCheckoutSchema from '@/validations/PaymentInfoCheckout';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface Package {
    product_name: string;
    id: string;
    quantity: number;
}

/*string = APY04XbyGBIFrgGh7HpBua5kSVvOtTdmTp0klnT1RnRzVngls8gyVFVWJWBemQCqot */
const Form = () => {

    //-------> initializing router for redirect
    const router = useRouter();

    //-------> using cart context
    const [cart] = useContext(CartContext);

    //------------> fetching should be controlled by it
    const [load, setLoad] = useState(false);  

        // -------> controlling form vibility
        const [index, setindex] = useState(1);

        // price();---------> call this function for calculating prices
    const price = () => {    
        let amount = 0;
        cart.forEach((cartProduct: CartProduct) => {
            const {product, quantity} = cartProduct;
            amount += product.price;
        });
        return amount;
    }

    // createPackages(); -------> call this function to create package details
    const createPackages = () => { 
        let array: Package[] = [];

        cart.forEach((cartProduct: CartProduct) => {
            const {product, quantity} = cartProduct;
            array.push({
                product_name:product.name,
                id: String(product.id),
                quantity: quantity,
            })
        });
        return array;
    }


            //-------> state that stores incoming form data
    const [userData, setuserData] = useState( 
        {
            name: "",
            phoneNumber: "",
            email: "",
            completeAddress: "",

            country: "Pakistan",
            province: "Sindh",
            city: "Karachi",
            postalCode: "",

            accountNumber:"",
            cardNumber: "",
            expirationDate: "",
            CVV: "",
            amountPayable: "$" + String(price()), // calculating prices using price() ----> returns number
            description: "",
            packages: createPackages(),// calculating prices using price() ----> returns products object containing required info
        }
    );

    //------------> main function for fetching data
    const postData = async () => {
        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData) // post original data instead of {}
            });
            const data = await response.json();
            toast.success(data.message);
            router.push("/products");
        } catch (err) {
            // ----------> popup notification for error
            toast.error("Error while processing form data"); 
            console.error(err);
        }
    }

// --------> fetch data when load state changes
    useEffect(() => { 
        if(load) {
        postData();
        // -----> call the redirect function from server
        } else {}
    }, [load]);

    //---------------->  function for handling personal info form-1
    const handleFormSubmission_1 = (e: React.FormEvent<HTMLFormElement
    >) => {
        e.preventDefault();

        // setindex(2);
        // console.log(userData);

        const data = {
            name: userData.name.trim(),
            email: userData.email.trim(),
            phonenumber: userData.phoneNumber.trim(),
            address: userData.completeAddress.trim(),
        }
        try {
            personalInfoCheckoutSchema.parse(data);
            setuserData({
                ...userData, email: personalInfoCheckoutSchema.parse(data).email, phoneNumber: personalInfoCheckoutSchema.parse(data).phonenumber, completeAddress: personalInfoCheckoutSchema.parse(data).address,
                name: personalInfoCheckoutSchema.parse(data).name
            });
            setindex(2)
        }
        catch (err:any) {
            toast.error(JSON.parse(err)[0].message);
        }
    }

    //---------------->  function for handling shipment info form-2
    const handleFormSubmission_2 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Shipment info form submitted");
        const data = {
            country: userData.country.trim(),
            province: userData.province.trim(),
            city: userData.city.trim(),
            postalcode: userData.postalCode.trim(),
        }
        // console.log(userData);
        try {
            ShipmentInfoCheckoutSchema.parse(data);
            setuserData({
                ...userData, city: ShipmentInfoCheckoutSchema.parse(data).city,
                province: ShipmentInfoCheckoutSchema.parse(data).province,
                country: ShipmentInfoCheckoutSchema.parse(data).country,
                postalCode: ShipmentInfoCheckoutSchema.parse(data).postalcode,
            });
            setindex(3);
        }
        catch (err:any) {
            toast.error(JSON.parse(err)[0].message);
        }
    }

    //---------------->  function for handling payment info form-3
    const handleFormSubmission_3 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("payment info form submitted");
        const data = {
            cardnumber: userData.cardNumber.trim(),
            expDate: userData.expirationDate.trim(),
            CVV: userData.CVV.trim(),
            instructions: userData.description.trim(),
            accountnumber:userData.accountNumber.trim(),
        }
        try {
            PaymentInfoCheckoutSchema.parse(data);
            setuserData({
                ...userData, cardNumber: PaymentInfoCheckoutSchema.parse(data).cardnumber,
                CVV: PaymentInfoCheckoutSchema.parse(data).CVV,
                expirationDate: PaymentInfoCheckoutSchema.parse(data).expDate,
                description: PaymentInfoCheckoutSchema.parse(data).instructions,
                accountNumber: PaymentInfoCheckoutSchema.parse(data).accountnumber
            });
            setLoad(true);
        } catch (err:any) {
            toast.error(JSON.parse(err)[0].message)
        }
    }


    // ------------------> applying conditional rendering so that form will apppear one by one

    if (index === 1) {  // ---------------> return personal details fields
        return (
            <section className='w-[500px] max-lg:w-[400px] max-md:w-[90vw]'>
                <form action="/" className='p-3' onSubmit={handleFormSubmission_1}>
                    <h1 className='text-3xl font-bold'>Checkout</h1>
                    <br />
                    <fieldset>
                        <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Customer information</legend>
                        <div className='px-5 py-1 flex flex-col gap-2'>
                            <label htmlFor="Enter your name" id='customer-name' className='text-[15px] text-gray-500'>Enter your name:</label>
                            <div>
                                <input type="text" name='customerName' id='customer-name' required minLength={8} maxLength={30} placeholder='Your name' className='rounded-md px-[20px] text-[15px] py-[10px] w-[310px] border-2 border-solid border-black' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setuserData({ ...userData, name: e.target.value });
                                }} />
                            </div>
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-2'>
                            <label htmlFor="Enter your name" id='customer-email' className='text-[15px] text-gray-500'>Your email:</label>
                            <div>
                                <input type="email" name='customerEmail' id='customer-email' required placeholder='abcd@gmail.com' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setuserData({ ...userData, email: e.target.value });
                                }} />
                            </div>
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-2'>
                            <label htmlFor="Enter your phonenumber" id='customer-phonenumber' className='text-[15px] text-gray-500'>Your phonenumber:</label>
                            <div>
                                <input type="tel" name='customerPhone' id='customer-phonenumber' minLength={4} maxLength={11} pattern={"^[0-9]{4,11}$"} required placeholder='0000-0000000' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.target.value.split("").forEach((char: string) => {
                                        if (isNaN(Number(char))) {
                                            e.target.value = "";
                                            alert("Please enter valid number")
                                        }
                                    });
                                    setuserData({ ...userData, phoneNumber: e.target.value })
                                }} />
                            </div>
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-2'>
                            <label htmlFor="Enter your complete address" id='complete-address' className='text-[15px] text-gray-500 w-[250px]'>Your complete address (if wrong the package is delivered to wrong person)</label>
                            <div>
                                <textarea name="completeAddress" id="complete-address" required minLength={80} maxLength={150} className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px] h-[100px]' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                    setuserData({ ...userData, completeAddress: e.target.value });
                                }}></textarea>
                            </div>
                        </div>

                    </fieldset>
                    <br />
                    <br />
                    <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[15px] py-[18px] hover:bg-purple' type={"submit"} onClick={() => {

                    }}>
                        <span>Next</span>
                    </Button>

                </form>
            </section>
        )
    } else if (index === 2) { // --------------> return shipment details fields
        return (
            <section className='w-[500px] max-lg:w-[400px] max-md:w-[90vw]'>
                <form action="/" className='p-3' onSubmit={handleFormSubmission_2}>
                    <h1 className='text-3xl font-bold'>Checkout</h1>
                    <br />
                    <fieldset>
                        <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Shipment details</legend>
                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Country" id='country' className='text-[15px] text-gray-500'>Select country</label>
                            <select name="country" id="country" required className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setuserData({ ...userData, country: e.target.value });
                            }}>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Pakistan">India</option>
                                <option value="Pakistan">Bangladesh</option>
                            </select>
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Province" id='province' className='text-[15px] text-gray-500'>Select province</label>
                            <select name="province" id="province" required className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setuserData({ ...userData, province: e.target.value });
                            }}>
                                <option value="Sindh">Sindh</option>
                                <option value="Sindh">Uttar pardesh</option>
                                <option value="Sindh">Punjab</option>
                            </select>
                        </div>
                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="City" id='city' className='text-[15px] text-gray-500'>Select city</label>
                            <select name="city" id="city" required className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setuserData({ ...userData, city: e.target.value });
                            }}>
                                <option value="Karachi">Karachi</option>
                                <option value="Karachi">Lahore</option>
                                <option value="Karachi">Dhaka</option>
                            </select>
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Postal code" id='postal-code' className='text-[15px] text-gray-500'>Enter postal code</label>
                            <input type="text" name='postalCode' id='postal-code' minLength={3} maxLength={10} placeholder='Your postal code' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, postalCode: e.target.value });
                            }} />
                        </div>
                    </fieldset>
                    <br />
                    <div className='flex flex-row flex-nowrap justify-start items-center gap-3'>
                        <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type={"submit"} onClick={() => {
                            // setindex(3)
                            // console.log(userData);
                        }}>
                            <span>Next</span>
                        </Button>
                        <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type='button' onClick={() => {
                            setindex(1)
                        }}>
                            <span>Back</span>
                        </Button>
                    </div>

                </form>
            </section>
        )
    } else if (index === 3) { // ---------------> return payment details fields
        return (
            <section className='w-[500px] max-lg:w-[400px] max-md:w-[90vw]'>
                <form action="/" className='p-3' onSubmit={handleFormSubmission_3}>
                    <h1 className='text-3xl font-bold'>Checkout</h1>
                    <br />
                    <fieldset>
                        <legend className='text-[15px] text-white px-[20px] py-[6px] rounded-2xl bg-blue'>Payment details</legend>
                        <div className='w-full px-[20px]'>
                        <span className='text-center text-[40px] font-semibold'>{userData.amountPayable}</span>
                        </div>
                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Enter account number" id='account-number' className='text-[15px] text-gray-500'>Enter account number</label>
                            <input type="text" name='accountNumber' id='account-number' placeholder='Account number' required className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, accountNumber: e.target.value });
                            }} />
                        </div>
                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Enter card number" id='card-number' className='text-[15px] text-gray-500'>Enter card number</label>
                            <input type="text" name='cardNumber' id='card-number' placeholder='Card number' required className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, cardNumber: e.target.value });
                            }} />
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Enter card number" id='card-number' className='text-[15px] text-gray-500'>Select expiration date</label>
                            <input type="date" name="expirationDate" id="expiration-date" className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' required onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                                let date = new Date();
                                let userDate = new Date(e.target.value);

                                date.setHours(0, 0, 0, 0);
                                userDate.setHours(0, 0, 0, 0);
                                //---->    perform comparing 
                                setuserData({ ...userData, expirationDate: e.target.value });
                            }} />
                        </div>

                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Enter Card verification value" id='card-vr-value' className='text-[15px] text-gray-500'>Enter CVV</label>
                            <input type="text" name='cardVrValue' id='card-vr-value' placeholder='Card verification value' required maxLength={4} minLength={3} className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] py-[10px] w-[310px]' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setuserData({ ...userData, CVV: e.target.value });
                            }} />
                        </div>
                        <div className='px-5 py-1 flex flex-col gap-3'>
                            <label htmlFor="Enter Card verification value" id='card-vr-value' className='text-[15px] text-gray-500'>Enter instructions for delivery</label>
                            <textarea name="description" id="description" placeholder='E.g Leave the parcel at my door without ringing bell' className='border-2 border-solid border-black rounded-md px-[20px] text-[15px] h-[100px] py-[10px] w-[310px]' required minLength={50} maxLength={200} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setuserData({ ...userData, description: e.target.value })
                            }}></textarea>
                        </div>

                    </fieldset>
                    <br />
                    <div className='flex flex-row flex-nowrap justify-start items-center gap-3'>
                        <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type={'submit'} onClick={() => {
                            // console.log(userData);
                        }}>
                            <span>Confirm payment</span>
                        </Button>
                        <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type='button' onClick={() => {
                            setindex(2);
                        }}>
                            <span>Back</span>
                        </Button>
                    </div>

                </form>
            </section>
        )
    } else if (!cart || cart.length <= 0) {  //------------------> return message when cart is empty
        return (
            <div>Please add the products you're interested in your cart</div>
        )
    }
}

export default Form;