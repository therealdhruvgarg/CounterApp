import { useState } from "react";
import { Button } from "../components/Button.jsx";
import { Message } from "../components/Message.jsx";

export const Counter  = ()=>{
    const [count,setCount] = useState(0);
    //let count = 0;
    const updateCount = (val)=>{
        if(val === '+')
          {
            setCount(count + 1);;
        }
        else {
            setCount(count - 1);
        }
        console.log('Count is ',count);
    }
    return(
        <div className="container">
            <Message classname = "alert alert-info" msg ="Counter App"/>
            <Message value = {count} classname = "alert alert-success " msg ="Counter Value is "/>
            <Button fn = {updateCount} classname = "btn btn-success me-2 " val = "+"/>
            <Button fn = {updateCount} classname = "btn btn-danger" val = "-"/>
        </div>
    )
}