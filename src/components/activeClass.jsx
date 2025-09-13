import { createContext, useState } from "react";

// create context
export const ActiveClass = createContext()

// context provider
export const ActiveClassProvider = ({ children }) => {

    const [active, setActive] = useState("Home");

    return <>
        <ActiveClass.Provider value={{ active, setActive }}>
            {children}
        </ActiveClass.Provider>
    </>
}

