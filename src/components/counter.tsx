import { useContext } from "react";
import { countContext } from "../contexts/counterCountext";

export const Counter = () => {
  const { count, dispatchCount } = useContext(countContext);
  console.log(count);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatchCount({ type: "INCREASE" })}>
        Increment
      </button>
      <button onClick={() => dispatchCount({ type: "DECREASE" })}>
        Decrement
      </button>
    </>
  );
};
