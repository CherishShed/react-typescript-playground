import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const Shop = () => {
  const { isLoggedIn, setLogin } = useContext(authContext);
  return <button onClick={() => setLogin(!isLoggedIn)}>Shop Auth</button>;
};
