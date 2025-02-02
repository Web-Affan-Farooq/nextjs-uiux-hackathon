"use client";

import React, {createContext, useState} from 'react';

export const NavContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>> ]>([false, () => {}]);

const NavContextProvider = ({children}:{children:React.ReactNode}) => {

    const [navStatus, setnavStatus] = useState<boolean>(false);

  return (
    <NavContext.Provider value={[navStatus, setnavStatus]}>
        {children}
    </NavContext.Provider>
  )
}

export default NavContextProvider