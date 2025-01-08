"use client";
import React, {createContext, useState} from 'react';

export const navContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const NavContextProvider = ({children}:{children:React.ReactNode}) => {
    const [navStatus, setnavStatus] = useState(false);
  return (
    <navContext.Provider value={[navStatus, setnavStatus]}>
        {children}
    </navContext.Provider>
  )
}

export default NavContextProvider;