import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const Shop = () => {
  const { setLogin } = useContext(authContext);
  return <button onClick={() => setLogin({ type: "logout" })}>Logout</button>;
};
