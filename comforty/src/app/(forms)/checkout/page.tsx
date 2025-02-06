import React from 'react';
import Image from 'next/image';
import Form from '@/components/(Checkout)/Form';

const Checkout = () => {
    return (
        <main>
            <article>
                <br /><br /><br />
                <section className='flex flex-row flex-wrap justify-between items-start'>

                    <Image src={"/images/checkout/checkout-banner.svg"} alt='banner' width={400} height={400} className='w-[400px] h-[500px] max-md:h-[400px]' />
                    <Form/>
                </section>
                <br /><br /><br />
            </article>
        </main>
    )
}

export default Checkout;