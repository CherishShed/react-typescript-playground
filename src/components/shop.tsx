import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const Shop = () => {
  const authCont = useContext(authContext);
  return (
    <button onClick={() => authCont?.setLogin(!authCont.isLoggedIn)}>
      Shop Auth
    </button>
  );
};
