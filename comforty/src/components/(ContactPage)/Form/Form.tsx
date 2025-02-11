"use client";

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ContactPageSchema from '@/validations/ContactSchema';
import { ZodError } from 'zod';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();

    const [load, setload] = useState(false);

    const [userData, setuserData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const getData = async() => {
        try {
            const response = await fetch("/api/contact", {
                method:"POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(userData),
            });
            const data = await response.json();
            toast.success(data.message);
            router.push("/products");
        } catch (err) {
            toast.error("Error while submission")
        }
    }
    useEffect(() => {
        if(load) {
            getData();
        }else {}
    }, [load]);



    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: userData.name.trim(),
            email: userData.email.trim(),
            subject: userData.subject.trim(),
            message: userData.message.trim(),
        }

        try {
            ContactPageSchema.parse(data);
            toast.success("Form submitted successfully");
            setload(true);
            router.push("/products")
        } catch (err: ZodError | any) {
            toast.error(JSON.parse(err)[0].message);
        }
    }
    return (
        <form className='flex flex-col flex-nowrap gap-5' onSubmit={handleFormSubmission}>

            <div className='w-[393px]  '>
                <label htmlFor="Your name" className='text-black font-bold text-left' id='name'>Your Name</label><br />
                <input type="text" name='name' id='name' placeholder='Joe doe' className='w-full px-[20px] py-[10px] rounded-md' required minLength={10} maxLength={30} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setuserData({...userData, name:e.target.value});
                }}/>
            </div>

            <div className=' w-[393px]  '>
                <label htmlFor="Enter email" className='text-black font-bold text-left' id='email'>Email Address</label><br />
                <input type="email" name='email' id='email' placeholder='abc@gmail.com' className='w-full  px-[20px] py-[10px] rounded-md' required minLength={8} maxLength={30} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setuserData({...userData, email:e.target.value})
                }}/>
            </div>

            <div className=' w-[393px]  '>
                <label htmlFor="Subject" className='text-black font-bold text-left' id='subject'>Subject</label><br />
                <input type="text" name='subject' id='subject' placeholder='Complaining about payment system' className='w-full px-[20px] py-[10px] rounded-md' required minLength={10} maxLength={100} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setuserData({...userData, subject:e.target.value});
                }}/>
            </div>

            <div className='w-[393px]  '>
                <label htmlFor="Enter your message" className='text-black font-bold text-left' id='message'>Message</label><br />
                <textarea name="message" id="message" placeholder="With due respect ..." className='w-full px-[20px] py-[10px] rounded-md' minLength={30} maxLength={700} required onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) =>{
                    setuserData({...userData, message:e.target.value});
                } }></textarea>
            </div>

            <div>
                {/* <button type="submit" className='py-[14px] px-[24px] rounded-[8px] bg-blue font-bold text-[16px] text-white max-md:px-[20px] max-md:py-[10px]'>
                    <span>Submit</span> <span><i className="fa-solid fa-arrow-right"></i></span>
                </button> */}
                <Button className='text-white bg-blue rounded-md font-bold flex flex-row flex-nowrap text-center text-[16px] gap-2 px-[10px] py-[23px] hover:bg-purple' type={'submit'} onClick={() => {
                    // setindex(3)
                    console.log(userData);
                }}>
                    <span>Submit</span>
                </Button>
            </div>

        </form>
    )
}

export default Form