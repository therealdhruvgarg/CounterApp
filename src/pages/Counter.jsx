import { Button } from "../components/Button.jsx";
import { Message } from "../components/Message.jsx";

export const Counter  = ()=>{
    return(
        <div className="container">
            <Message classname = "alert alert-info" msg ="Counter App"/>
            <Message classname = "alert alert-success" msg ="Counter Value is "/>
            <Button classname = "btn btn-success me-2" val = "+"/>
            <Button classname = "btn btn-danger" val = "-"/>
        </div>
    )
}