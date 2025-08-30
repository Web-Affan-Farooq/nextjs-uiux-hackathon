import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Green_label from '../../Labels/Green-label';
import Orange_label from '../../Labels/Orange-label';
import { Button } from '../../ui/button';
import { Product } from '@/@types/Products';


const Card = ({data}:{data:Product}) => {

    // Because some products have no tags then assign them a blank array so that it will always return true or false
    if(data.tags === null) {
        data.tags = []
    }
    // console.log(data);
    
    // return (
    //     <Image src={data.image} alt='productname' width={100} height={100}/>
    // )
    return (
        <div className='group hover transition-all duration-500 ease-in-out shadow-lg rounded-md 2xl:w-[312px] xl:w-[312px] lg:w-[260px] md:w-[250px] sm:w-[200px] max-sm:w-[200px] px-[10px] py-[5px] whitespace-normal overflow-hidden'>
            {/* <div
                className=' sticky bg-white text-center font-semibold text-[15px] text-black w-auto px-[5px] h-[25px] rounded-md transition-transform duration-100 ease-linear'> 
                20% off
            </div> */}

            {/* <Orange_label/> */}
            {/* <Green_label/> */}
            {
                data.tags.includes("New Collection")?<Green_label/>:<></>
            }


            <Image src={data.image} alt={data.name} width={240} height={240} className='rounded-md w-[240px] h-[240px] max-md:w-[180px] max-md:h-[180px] max-sm:w-[160px] max-sm:h-[160px]' />
            <h1 className='leading-[21px] w-full my-[5px] max-md:h-[70px] max-sm:h-[60px] text-[16px] font-semibold group-hover:text-blue transition-all max-sm:text-[14px]'>{data.name}</h1> {/* maximum limit 62 characters */}

            <div className='flex flex-row flex-nowrap justify-between items-center p-2'>
                <span className='text-purple text-[18px] font-bold'>${data.price}</span>
                <Link href={"/products/" + data.id}>
                    <Button className='sm:w-[30px] bg-blue sm:h-[30px] px-[10px] py-[10px] hover:bg-purple transition-all'>
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] sm:h-[30px] object-contain'>
                                <path d="M2.52087 2.97913L4.42754 3.30913L5.31029 13.826C5.3442 14.2399 5.5329 14.6257 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3417 17.7431 15.1986 18.0436 14.9382C18.344 14.6778 18.5404 14.3177 18.5965 13.9241L19.4673 7.91263C19.4905 7.75275 19.482 7.58987 19.4422 7.43329C19.4024 7.27671 19.3322 7.12951 19.2354 7.00011C19.1387 6.8707 19.0175 6.76163 18.8786 6.67913C18.7397 6.59663 18.5859 6.54231 18.426 6.51929C18.3673 6.51288 4.73371 6.50829 4.73371 6.50829" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.948 9.89539H15.4899" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5272 6.75515 18.551C6.81811 18.5747 6.87562 18.611 6.9242 18.6575C6.97279 18.704 7.01145 18.7599 7.03787 18.8218C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2133C7.01145 19.2752 6.97279 19.3311 6.9242 19.3777C6.87562 19.4242 6.81811 19.4605 6.75515 19.4842C6.69219 19.5079 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2697 6.08057 19.1461 6.08057 19.0176C6.08057 18.889 6.13021 18.7654 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.54550 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z" fill="#ffffff" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </Button>
                </Link>
            </div>
        </div>)
}

export default Card;