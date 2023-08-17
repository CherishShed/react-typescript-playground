import { createContext, useReducer } from "react";
type counterProps = { children: JSX.Element };
type countObj = {
  count: number;
  dispatchCount: React.Dispatch<{ type: string }>;
};
export const countContext = createContext({} as countObj);

export const CountContextProvider = (props: counterProps) => {
  const counterReducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case "INCREASE":
        return state + 1;
      case "DECREASE":
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatchCount] = useReducer(counterReducer, 0);
  return (
    <countContext.Provider value={{ count, dispatchCount }}>
      {props.children}
    </countContext.Provider>
  );
};
