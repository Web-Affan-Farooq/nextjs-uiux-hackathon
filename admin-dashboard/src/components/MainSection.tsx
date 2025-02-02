"use client";

import { OptionContext } from '@/context/Option';
import React, { useContext } from 'react';

// importing sections:
import FormSubmissions from './Form-submissions/Section';

const MainSection = () => {
    const [option] = useContext(OptionContext);

    if(option === "Form Submissions") {
        return (<FormSubmissions/>)
    }
}

export default MainSection