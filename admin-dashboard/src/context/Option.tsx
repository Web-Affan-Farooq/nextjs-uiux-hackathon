"use client";

import React, {createContext, useState} from 'react';

export const OptionContext = createContext<[string, React.Dispatch<React.SetStateAction<string>> ]>(["", () => {}]);

const OptionContextProvider = ({children}:{children:React.ReactNode}) => {

    const [navStatus, setnavStatus] = useState<string>("");

  return (
    <OptionContext.Provider value={[navStatus, setnavStatus]}>
        {children}
    </OptionContext.Provider>
  )
}

export default OptionContextProvider