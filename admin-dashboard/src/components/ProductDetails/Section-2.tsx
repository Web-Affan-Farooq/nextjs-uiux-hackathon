"use client";

import React, { Children, useState } from 'react';
import { Product } from '@/@types/Products';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


const Section_2 = ({ data }: { data: Product }) => {
    const [productData, setproductData] = useState<Product>(
        {
            category: data.category,
            discount: data.discount,
            image: {
                asset: {
                    url: data.image.asset.url,
                    _id: data.image.asset._id
                }
            },
            longDescription: [
                {
                    style: data.longDescription[0].style,
                    children: [
                        {
                            text: data.longDescription[0].children[0].text,
                        }
                    ]
                }
            ],
            price: data.price,
            productName: data.productName,
            quantityAvailable: data.quantityAvailable,
            ratings: data.ratings,
            ratingsInCount: data.ratingsInCount,
            shortDescription: data.shortDescription,
            weight: data.weight,
            _id: data._id,
            tags:data.tags,
        }
    );

    return (
        <section>
            <h1 className='font-bold text-[30px]'>Details: </h1>
            <br />

            <form action="" className='border-2 border-solid border-black'>
                <fieldset className="flex flex-row flex-wrap gap-2 border-2 border-solid border-black">
                    <div className='px-5 py-1'>
                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product name:</label>
                        <div>
                            <input type="text" name='productName' id='product-name' required minLength={8} maxLength={30} placeholder='Product name' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.productName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                setproductData({...productData, productName:e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter your name" id='product-price' className='text-[15px] text-gray-500'>Enter product price:</label>
                        <div>
                            <input type="text" name='productPrice' id='product-price' required minLength={8} maxLength={30} placeholder='Price' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.price} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                                setproductData({...productData, price:Number(e.target.value)})
                            }}/>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter short product description" id='short-description' className='text-[15px] text-gray-500'>Short description:</label>
                        <div>
                            <textarea name="shortDescription" id="short-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]'  defaultValue={productData.shortDescription} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => {
                                setproductData({...productData, shortDescription:e.target.value})
                            }}></textarea>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter detailed product description" id='long-description' className='text-[15px] text-gray-500'>Long description:</label>
                        <div>
                            <textarea name="longDescription" id="long-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]'  defaultValue={productData.longDescription[0].children[0].text}></textarea>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter quantity" id='product-quantity' className='text-[15px] text-gray-500'>Quantity:</label>
                        <div>
                            <input name="productQuantity" id="product-quantity" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.quantityAvailable} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter ratings" id='product-ratings' className='text-[15px] text-gray-500'>Ratings:</label>
                        <div>
                            <input name="productRatings" id="product-ratings" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black ' defaultValue={productData.ratings} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter ratings in numbers" id='product-ratings-count' className='text-[15px] text-gray-500'>Ratings count:</label>
                        <div>
                            <input name="productRatingsCount" id="product-ratings-count" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.ratingsInCount} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Select tags" id='product-tags' className='text-[15px] text-gray-500'>Select tags:</label>
                        <div className='flex flex-row flex-nowrap gap-3 '>
                            <input type={"checkbox"} name="Featured" defaultChecked={productData.tags.includes("Featured")} id="product-tags" /> Featured
                            <input type={"checkbox"} name="newCollection" id="product-tags" defaultChecked={productData.tags.includes("New Collections")}/> New Collections
                            <input type={"checkbox"} name="topRated" id="product-tags" defaultChecked={productData.tags.includes("Top rated")}/> Top Rated
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Select category" id='product-category' className='text-[15px] text-gray-500'>Select category:</label>
                        <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                            <input type={"radio"} name="productCategory" defaultChecked={productData.category === "Sofas"} id="product-category" />Sofas
                            <input type={"radio"} name="productCategory" defaultChecked={productData.category === "Chairs"} id="product-category" />Chairs
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product weight in kgs:</label>
                        <div>
                            <input type="text" name='productWeight' id='product-weight' required minLength={8} maxLength={30} placeholder='Product weight' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.weight}/>
                        </div>
                    </div>
                </fieldset>
                <button type="button" className='bg-customgreen px-[20px] py-[7px] rounded-md font-bold text-white'>Commit changes</button>
            </form>
        </section>
    )
}

export default Section_2;

/*
<form action="" className='border-2 border-solid border-black'>
                                <fieldset className="flex flex-row flex-wrap gap-2 border-2 border-solid border-black">
                                    <div className='px-5 py-1'>
                                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product name:</label>
                                        <div>
                                            <input type="text" name='productName' id='product-name' required minLength={8} maxLength={30} placeholder='Your name' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' />
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter your name" id='product-price' className='text-[15px] text-gray-500'>Enter product price:</label>
                                        <div>
                                            <input type="text" name='productPrice' id='product-price' required minLength={8} maxLength={30} placeholder='Price' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' />
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter short product description" id='short-description' className='text-[15px] text-gray-500'>Short description:</label>
                                        <div>
                                            <textarea name="shortDescription" id="short-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]' ></textarea>
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter detailed product description" id='long-description' className='text-[15px] text-gray-500'>Long description:</label>
                                        <div>
                                            <textarea name="longDescription" id="long-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]' ></textarea>
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter quantity" id='product-quantity' className='text-[15px] text-gray-500'>Quantity:</label>
                                        <div>
                                            <input name="productQuantity" id="product-quantity" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' />
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter ratings" id='product-ratings' className='text-[15px] text-gray-500'>Ratings:</label>
                                        <div>
                                            <input name="productRatings" id="product-ratings" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black ' />
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter ratings in numbers" id='product-ratings-count' className='text-[15px] text-gray-500'>Ratings count:</label>
                                        <div>
                                            <input name="productRatingsCount" id="product-ratings-count" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' />
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Select tags" id='product-tags' className='text-[15px] text-gray-500'>Select tags:</label>
                                        <div className='flex flex-row flex-nowrap gap-3 '>
                                            <input type={"checkbox"} name="Featured" value={'Featured'} id="product-tags" /> Featured
                                            <input type={"checkbox"} name="newCollection" value={'New Collections'} id="product-tags" /> New Collections
                                            <input type={"checkbox"} name="topRated" value={'Top rated'} id="product-tags" /> Top Rated
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Select category" id='product-category' className='text-[15px] text-gray-500'>Select category:</label>
                                        <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                                            <input type={"radio"} name="productCategory" value={'Sofas'} id="product-category" />Sofas
                                            <input type={"radio"} name="productCategory" value={'Chairs'} id="product-category" />Chairs
                                        </div>
                                    </div>
                                    <div className='px-5 py-1 flex flex-col gap-2'>
                                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product weight:</label>
                                        <div>
                                            <input type="text" name='productWeight' id='product-weight' required minLength={8} maxLength={30} placeholder='Product weight' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
 */




{/* <div className='flex flex-row flex-nowrap justify-between items-center align-middle'>
                <h2 className='font-bold text-[24px]'>Quantity:</h2>
                <p>20 products available</p>
            </div> */}
{/* <br /> */ }

{/* <div className='flex flex-row flex-nowrap justify-evenly items-center'>
                <div className='flex flex-col flex-nowrap justify-center items-start gap-2 w-[150px]'>
                    <div>            <button type="button" className='bg-customgreen text-[20px] px-[10px] font-bold text-white rounded-sm'>+</button> <span>Add stock</span></div>
                    <div>
                        <button type="button" className='bg-customgreen text-[20px] px-[10px] font-bold text-white rounded-sm'>--</button> <span>Reduce stock</span>
                    </div>
                </div>
                <div className='font-extrabold text-[30px] tracking-tighter'>
                    30
                </div>
            </div> */}
{/* <br /> */ }
{/* <div className='flex flex-row flex-nowrap justify-between items-center align-middle'>
                <h2 className='font-bold text-[24px]'>Price: </h2>
            </div> */}
{/* <input type="text" name="price" id="price" className='border-2 border-solid border-black px-[20px] py-[7px] rounded-md' /> */ }
{/* <br /> */ }
{/* <br /> */ }
{/* <div className='flex flex-row flex-nowrap justify-between items-center align-middle'>
                <h2 className='font-bold text-[24px]'>Descriptions: </h2>
            </div> */}
{/* <br /> */ }
{/* <label htmlFor="Long description" className='text-gray-600'>Main description :</label>
            <textarea name="longDescription" id="long-description"  className='border-2 border-solid border-black px-[20px] py-[7px] rounded-md w-[70vw]'></textarea> */}
{/* <label htmlFor="Long description" className='text-gray-600'>Short description :</label>
            <textarea name="longDescription" id="long-description"  className='border-2 border-solid border-black px-[20px] py-[7px] rounded-md w-[70vw]'></textarea> */}