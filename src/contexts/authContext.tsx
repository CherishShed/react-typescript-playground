import { createContext, useState } from "react";
type contextProps = { children: JSX.Element };
type contextState = {
  isLoggedIn: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
export const authContext = createContext({} as contextState);

export const AuthContextProvider = (props: contextProps) => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <authContext.Provider value={{ isLoggedIn, setLogin }}>
      {props.children}
    </authContext.Provider>
  );
};
