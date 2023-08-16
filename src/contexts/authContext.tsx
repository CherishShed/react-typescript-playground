import { createContext, useReducer } from "react";
type contextProps = { children: JSX.Element };
type contextState = {
  isLoggedIn: boolean;
  setLogin: React.Dispatch<{ type: string }>;
};
export const authContext = createContext({} as contextState);
const authReducer = (state: boolean, action: { type: string }) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export const AuthContextProvider = (props: contextProps) => {
  const [isLoggedIn, setLogin] = useReducer(authReducer, false);

  return (
    <authContext.Provider value={{ isLoggedIn, setLogin }}>
      {props.children}
    </authContext.Provider>
  );
};
