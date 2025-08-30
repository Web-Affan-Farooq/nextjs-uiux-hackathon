## Admin Dashboard Comforty:

This is the project that serves as a dashboard for comforty ecommerce project.

## Basic Overview Of Dashboard:

### 1. Frontend:
#### /Components
This directory contains all the ui components used in forntend
- **./ui** contains components that are used from shadcn ui
- **./Buttons** contains all types of buttons
- **./Cards** contains all type of cards used in app
- **./Form-Submissions** contains all the components involved in form submission page ui.
- **./Orders** contains all the ui components involved in orders page
- **./ProductDetails** contains all the components that are involved in products details dynamic page.
- **./Products** contains all the components of products page .
- **./Sidebar** contains sidebar.

### /context:
This directory contains all the global states used by application.

- **./NavContext.tsx** contains state that is managing sidebar toogle behaviour.

### /@types:
This directory contains all the types of complex data.
- **./Products.ts** file contains type annotations for product object that is fetched from sanity

### /lib
Contains configuration file and common logic functions.

- **DemoProduct.ts** has an exported fake product object that you can use in any file . Mainly serves as demo product for testing and integration of fetched data in inventory management page.

- **permissions.ts** file fetches permissions from server that are updated by developer. These permissions are used to implement restrictions in local api usage and to ensure that administrative operations should be only performed when permitted from developer.

- **sanity.ts** file contains configurations for setting up sanity client.

- **utils.ts** used in configuration of shadcn ui.

###  Routes in this project:

- **/events** for creating new offers (implemented but shipped soon)
- **/form-submissions** for form submissions . Also containing dynamic route for each form data.
- **/inventory** for managing inventory . Also has a dynamic route for each product data.
- **/orders** for orders related operations . Also contains dynamic route for orders.

## Backend:
api folder contains all the backend routes for operations and have three main end points. Reach out :

### /events
- **/delete** handles DELETE request and deletes the offer
- **/new** handles POST request and craete new offer
### /orders
- **/delete** handles DELETE request for deleting order entry
- **/update** handles PATCH request for editing orders entry

### /products
- **/delete** handles a DELETE request and deletes the product from datasets.
- **/edit** handles a PATCH request and edit product data in datasets.
- **/get** handles a POST request for getting unique product data
- **/new** handles a POST request for adding new product in datasets.

## Anatomy of Dashboard:

 #### Layout of Dashboard:
- A dashboard can contains a side bar for navigations and a centered section for each option
- A dashboard can contain 4 routes orders, form submissions, creating events like offers and coupens
- A dashboard can also contains a section that contains card showing products and a dynamic route attached to that card to show the details of card , on this details page the card can have input fields that are editable

``` bash
        Admin Dashboard
            |__Orders
            |__Form submissions
            |__Inventory management ( edit product data, add new product, delete a product , update product quantity, update any product data, add new categories(optional))
```

### Sections of the dashboard:
#### Orders:
This section contains small cards that carry information about each order. Completed orders should not be shown in this section

#### Form submissions:
Contains record of form submissions from contact page.

#### Schedule (implemented soon) :
A visual planner for scheduling and managing admin panel back office work


#### Shadcn ui components for this:

1. tabs
2. sheet
3. Sidebar
4. data table

## Future updates:

- Integrate emailing service for rejected orders
- Integrate limit fetch function
- Create scheduling option

code for implementing limit fetch:

``` javascript
"use client";

import { Product } from '@/@types/Products';
import sanityClient from '@/lib/sanity';
import React, { useEffect, useRef, useState } from 'react';
import Card_Products from '../Cards/Card-Products';
import { DemoProduct } from '@/lib/DemoProduct';

const MainPage = () => {
    const [productsData, setproductsData] = useState<any[]>([]);
    const [visible, setvisible] = useState(false);
    const elmRef = useRef(null);
    const startingIndex = useRef<number | null>(null);
    const endingIndex = useRef<number | null>(null);

    if(productsData) {
        startingIndex.current = productsData.length;
        endingIndex.current = productsData.length + 10
    }

    const callbackFunction = (entries: any) => {
        const [entry] = entries;
        setvisible(entry.isIntersecting);
    }
    const options = {
        root: null, // Observe within the viewport
        rootMargin: "0px", // Load new items slightly before reaching the bottom
        threshold: 0.1, // Trigger when 10% of the element is visible
    };
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (elmRef.current) observer.observe(elmRef.current);

        return () => {
            if (elmRef.current) { observer.unobserve(elmRef.current) };
        }
    }, [elmRef, options]);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("intersecting");
            }
        })
    }, {
        root: null, // Observe within the viewport
        rootMargin: "100px", // Load new items slightly before reaching the bottom
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    useEffect(() => {
        console.log(visible);
    }, [visible]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("/api/products/get", {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({startIndex:startingIndex.current, endIndex:endingIndex.current})
                });
                const data = await response.json();
                // setproductsData([...productsData,data.data[0]]);
                // console.log(data.data);
                setproductsData([...productsData, data.data]);
                
            } catch (err) {
                console.error(err);
            }
        }

        getData();
    }, [visible]);

    useEffect(() => {
        console.log("Products :", productsData[0]);
    }, [productsData]);

    const element = document.querySelector("#exm") as HTMLDivElement;
    return (
        <div>
            {/* <div className=''>{productData.length} products found</div> */}
            <div className=''>4 products found</div>
            <div className='flex flex-row flex-wrap justify-center items-center gap-3'>
                {/* {productsData[0].map((product: Product, index: number) => {
                    return <Card_Products data={product} key={index} />
                })} */}

            </div>
            <div className='border-2 border-solid border-black p-10' id='exm' ref={elmRef}> example div</div>
        </div>
    )
}

export default MainPage;


/// resolve the error in setting product page
```