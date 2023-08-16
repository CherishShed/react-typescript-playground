import { Person } from "./person"
type GreetProps = {name:string, count:number, isLoggedIn:boolean}
const people=[{firstName: "John", lastName: "Doe"},{firstName: "ayo", lastName: "muhammas"},{firstName: "Yaradua", lastName: "musa"},]
export const Greet = (props:GreetProps)=>{
return(
    <div>
        <h1>Hello World</h1>
        <h2>The people are</h2>
        {people.map(({firstName, lastName})=> <Person lastName={lastName} firstName={firstName}/>)}
        {(props.isLoggedIn)?
        <>
        <p>You have {props.count} notifications.</p>
        </>:<p>Welcome {props.name} please log in</p>
}
    </div>
)
}