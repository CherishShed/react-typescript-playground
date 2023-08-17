import { useContext, useEffect, useRef } from "react";
import { countContext } from "../contexts/counterCountext";

export const Counter = () => {
  const { count, dispatchCount } = useContext(countContext);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });
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

      <input type="text" ref={inputRef} />
    </>
  );
};
