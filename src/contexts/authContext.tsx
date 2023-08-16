import { createContext, useState } from "react";
type contextProps={children:JSX.Element}
const authContext = createContext({});

export const AuthContextProvider = (props:contextProps) => {
    const [isLoggedIn, setLogin] = useState(false);

    return (
        <authContext.Provider value={{isLoggedIn, setLogin}}>
            {props.children}
        </authContext.Provider>
    )
}