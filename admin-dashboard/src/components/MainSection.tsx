"use client";

import React from 'react';

// importing sections:
import FormSubmissions from './Form-submissions/Section';
import { useRouter } from 'next/navigation';

const MainSection = () => {
    const router = useRouter();
    console.log(router);
    
    return (<FormSubmissions />)
}

export default MainSection