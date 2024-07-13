import { Button } from "../components/Button.jsx";
import { Message } from "../components/Message.jsx";

export const Counter  = ()=>{
    let count = 0;
    const setCount = (val)=>{
        if(val === '+')
          {
            count++;
        }
        else {
            count--;
        }
        console.log('Count is ',count);
    }
    return(
        <div className="container">
            <Message classname = "alert alert-info" msg ="Counter App"/>
            <Message value = {count} classname = "alert alert-success " msg ="Counter Value is "/>
            <Button fn = {setCount} classname = "btn btn-success me-2 " val = "+"/>
            <Button fn = {setCount} classname = "btn btn-danger" val = "-"/>
        </div>
    )
}