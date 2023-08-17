import { useContext } from "react";
import { Person } from "./person";
import { authContext } from "../contexts/authContext";
import { Shop } from "./shop";
import { Counter } from "./counter";
import { CountContextProvider } from "../contexts/counterCountext";
type GreetProps = { name: string; count: number; isLoggedIn: boolean };
const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "ayo", lastName: "muhammas" },
  { firstName: "Yaradua", lastName: "musa" },
];
export const Greet = (props: GreetProps) => {
  const { isLoggedIn, setLogin } = useContext(authContext);
  return (
    <div>
      <h1>Hello World</h1>
      <h2>The people are</h2>
      {people.map(({ firstName, lastName }, index) => (
        <Person lastName={lastName} key={index} firstName={firstName} />
      ))}
      {isLoggedIn ? (
        <p>You have {props.count} notifications.</p>
      ) : (
        <p>Welcome {props.name} please log in</p>
      )}
      <button onClick={() => setLogin({ type: "login" })}>Login</button>

      <Shop />
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
    </div>
  );
};
