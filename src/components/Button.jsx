export const Button = ({val,classname,fn}) =>{
    const clicked = ()=>{
        fn(val);
    }
    return(
        <button onClick={clicked} className={classname}>{val}</button>
    )
}