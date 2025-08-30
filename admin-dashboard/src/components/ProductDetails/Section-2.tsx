"use client";

import React, { useEffect, useState } from 'react';
import { Product } from '@/@types/Products';
import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from 'next/navigation';

const Section_2 = ({ data }: { data: Product }) => {
    const router = useRouter();
    const [updatedContent, setupdatedContent] = useState(false);
    const [deleteProduct, setdeleteProduct] = useState(false);
    const [UpdatedImage, setUpdatedImage] = useState<string | null>(null);
    const [mockFile, setmockFile] = useState<File | null>();

    useEffect(() => {
        if (deleteProduct) {
            const deleteProductData = async () => {
                try {
                    const response = await fetch("/api/products/delete", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id: data._id })
                    });
                    const returnResponse = await response.json();
                    console.log(returnResponse.message);
                    router.push("/inventory");
                }
                catch (err) {
                    console.error(err);
                }
            }
            deleteProductData();
        }
        return () => { }
    }, [deleteProduct]);

    useEffect(() => {
        const updatedRequest = async () => {
            try {
                const response = await fetch("/api/products/edit", {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedproductData)
                });
                const data = await response.json();

            } catch (err) {
                console.error(err);
            }
        }
        if (updatedContent) {
            updatedRequest();
        }
        else { }
        return () => { }
    }, [updatedContent])
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
            tags: data.tags,
        }
    );

    const [updatedproductData, setupdatedproductData] = useState(
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
            tags: data.tags,
        }
    );

    const handleCommit = () => {
        // const productNameFieldArray = document.querySelector("#product-name") as HTMLInputElement;
        // if(updatedproductData.productName === "") {
        //     setupdatedproductData({...updatedproductData, productName:productData.productName});
        // } else if () {

        // }
        console.log(updatedContent);

        // checking if both states are equal
        const isContentUpdatedAlready = updatedproductData.productName === productData.productName &&
            updatedproductData.category === productData.category &&
            updatedproductData.discount === productData.discount &&
            updatedproductData.image.asset.url === productData.image.asset.url &&
            updatedproductData.image.asset._id === productData.image.asset._id &&
            updatedproductData.longDescription[0].children[0].text === productData.longDescription[0].children[0].text &&
            updatedproductData.price === productData.price &&
            updatedproductData.quantityAvailable === productData.quantityAvailable &&
            updatedproductData.ratings === productData.ratings &&
            updatedproductData.ratingsInCount === productData.ratingsInCount &&
            updatedproductData.shortDescription === productData.shortDescription &&
            updatedproductData.weight === productData.weight &&
            UpdatedImage === null;

        if (isContentUpdatedAlready) {
            console.log("Content not updated");
        } else {
            setupdatedContent(true)
        }
    }

    return (
        <section>
            <h1 className='font-bold text-[30px]'>Details: </h1>
            <br />

            <form action="" className='border-2 border-solid border-black'>
                <fieldset className="flex flex-row flex-wrap gap-2 border-2 border-solid border-black">
                    <div className='px-5 py-1'>
                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product name:</label>
                        <div>
                            <input type="text" name='productName' id='product-name' required minLength={8} maxLength={30} placeholder='Product name' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.productName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, productName: e.target.value });
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter your name" id='product-price' className='text-[15px] text-gray-500'>Enter product price:</label>
                        <div>
                            <input type="text" name='productPrice' id='product-price' required minLength={8} maxLength={30} placeholder='Price' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, price: Number(e.target.value) })
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter discount" id='product-dicount' className='text-[15px] text-gray-500'>Discount :</label>
                        <div>
                            <input name="productDiscount" id="product-discount" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.discount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, discount: Number(e.target.value) });
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter short product description" id='short-description' className='text-[15px] text-gray-500'>Short description:</label>
                        <div>
                            <textarea name="shortDescription" id="short-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]' defaultValue={productData.shortDescription} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setupdatedproductData({ ...updatedproductData, shortDescription: e.target.value })
                                setupdatedContent(true)
                            }}></textarea>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter detailed product description" id='long-description' className='text-[15px] text-gray-500'>Long description:</label>
                        <div>
                            <textarea name="longDescription" id="long-description" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black h-[150px]' defaultValue={productData.longDescription[0].children[0].text} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setupdatedproductData({
                                    ...updatedproductData, longDescription: [
                                        {
                                            style: data.longDescription[0].style,
                                            children: [
                                                {
                                                    text: e.currentTarget.value,
                                                }
                                            ]
                                        }
                                    ]
                                })
                                setupdatedContent(true)
                            }}></textarea>
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter quantity" id='product-quantity' className='text-[15px] text-gray-500'>Quantity:</label>
                        <div>
                            <input name="productQuantity" id="product-quantity" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.quantityAvailable} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, quantityAvailable: Number(e.target.value) })
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter ratings" id='product-ratings' className='text-[15px] text-gray-500'>Ratings:</label>
                        <div>
                            <input name="productRatings" id="product-ratings" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black ' defaultValue={productData.ratings} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, ratings: Number(e.target.value) });
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter ratings in numbers" id='product-ratings-count' className='text-[15px] text-gray-500'>Ratings count:</label>
                        <div>
                            <input name="productRatingsCount" id="product-ratings-count" className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.ratingsInCount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, ratingsInCount: Number(e.target.value) })
                                setupdatedContent(true)
                            }} />
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Select tags" id='product-tags' className='text-[15px] text-gray-500'>Select tags:</label>
                        <div className='flex flex-row flex-nowrap gap-3 '>
                            <input type={"checkbox"} name="Featured" defaultChecked={productData.tags.includes("Featured")} id="product-tags" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedContent(true)
                                if (e.target.checked) {
                                    if (!updatedproductData.tags.includes("Featured")) {
                                        setupdatedproductData({ ...updatedproductData, tags: [...updatedproductData.tags, "Featured"] });
                                    } else {
                                    }
                                } else if (!e.target.checked && updatedproductData.tags.includes("Featured")) {
                                    let result = updatedproductData.tags.some((t: string, index: number, arr: string[]) => {
                                        t === "Featured";
                                        return updatedproductData.tags.splice((arr.indexOf("Featured")), 1)
                                            ;
                                    });
                                }
                            }} /> Featured
                            <input type={"checkbox"} name="newCollection" id="product-tags" defaultChecked={productData.tags.includes("New Collections")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedContent(true)
                                if (e.target.checked) {
                                    if (!updatedproductData.tags.includes("New Collections")) {
                                        setupdatedproductData({ ...updatedproductData, tags: [...updatedproductData.tags, "New Collections"] });
                                    } else { }
                                } else if (!e.target.checked && updatedproductData.tags.includes("New Collections")) {
                                    let result = updatedproductData.tags.some((t: string, index: number, arr: string[]) => {
                                        t === "New Collections";
                                        return updatedproductData.tags.splice((arr.indexOf("New Collections")), 1)
                                            ;
                                    });
                                }

                            }} /> New Collections
                            <input type={"checkbox"} name="topRated" id="product-tags" defaultChecked={productData.tags.includes("Top rated")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedContent(true)
                                if (e.target.checked) {
                                    if (!updatedproductData.tags.includes("Top rated")) {
                                        setupdatedproductData({ ...updatedproductData, tags: [...updatedproductData.tags, "Top rated"] });
                                    } else {
                                    }
                                } else if (!e.target.checked && updatedproductData.tags.includes("Top rated")) {
                                    let result = updatedproductData.tags.some((t: string, index: number, arr: string[]) => {
                                        t === "Top rated";
                                        return updatedproductData.tags.splice((arr.indexOf("Top rated")), 1)
                                            ;
                                    });
                                }
                            }} /> Top Rated
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Select category" id='product-category' className='text-[15px] text-gray-500'>Select category:</label>
                        <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                            <input type={"radio"} name="productCategory" defaultChecked={productData.category === "Sofas"} id="product-category" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, category: "Sofas" });
                                setupdatedContent(true)
                            }} />Sofas
                            <input type={"radio"} name="productCategory" defaultChecked={productData.category === "Chairs"} id="product-category" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, category: "Chairs" })
                                setupdatedContent(true)
                            }} />Chairs
                        </div>
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Update product image" id='product-image' className='text-[15px] text-gray-500'>Update image :</label>
                        <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                            <input type={"file"} name="productImage" id="product-category" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedContent(true)
                                if (e.target.files) {
                                    const file = e.target.files[0];
                                    setmockFile(file)
                                    const reader = new FileReader();
                                    reader.onload = function (e: any) {
                                        setUpdatedImage(e.target.result as string);
                                    }
                                    reader.readAsDataURL(file);
                                }
                            }} />
                        </div>
                        {UpdatedImage ? <Image src={UpdatedImage} alt='preview image' width={100} height={100} /> : <></>}
                    </div>
                    <div className='px-5 py-1 flex flex-col gap-2'>
                        <label htmlFor="Enter product name" id='product-name' className='text-[15px] text-gray-500'>Product weight in kgs:</label>
                        <div>
                            <input type="text" name='productWeight' id='product-weight' required minLength={8} maxLength={30} placeholder='Product weight' className='rounded-md px-[20px] text-[15px] py-[8px] w-[310px] border-2 border-solid border-black' defaultValue={productData.weight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setupdatedproductData({ ...updatedproductData, weight: Number(e.target.value) });
                            }} />
                        </div>
                    </div>
                </fieldset>
                <button type="button" className={`bg-customgreen px-[20px] py-[7px] rounded-md font-bold text-white`} onClick={handleCommit}>Commit changes</button>
            </form>

            <br />
            <div>
                <h1 className='text-[30px] font-bold'>Delete product :</h1>
                <br />
                <button type="button" onClick={() => {
                    setdeleteProduct(true);
                }} className='bg-red-500 px-[20px] py-[7px] rounded-md font-bold text-white'>
                    Delete
                </button>
            </div>
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