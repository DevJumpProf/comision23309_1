import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () =>{
const [count,setCount] = useState(58)

useEffect(()=>{
console.log("el contador se actualizo");
},[count])

return (
    <>
        <Button onClick={()=>setCount(count+1)} size="sm" variant="success">+</Button>
        <p>Numero:{count}</p>
        <Button onClick={()=>setCount(count-1)} size="sm" variant="success">-</Button>
    </>
)

}

