import { Message } from "../components/Message.jsx";

export const Counter  = ()=>{
    return(
        <div className="container">
            <Message classname = "alert alert-info text-center" msg ="Counter App"/>
            <Message classname = "alert alert-success" msg ="Counter Value is "/>
        </div>
    )
}