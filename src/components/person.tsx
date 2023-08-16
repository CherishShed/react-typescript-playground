type PersonProps={firstName: string, lastName:string}
export const Person = (props:PersonProps)=>{
    return(
<p>{props.firstName} {props.lastName}</p>
    )
}