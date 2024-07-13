export const Message = ({msg,classname,value=""}) =>{
    const myclassname = `${classname}  text-center`
    return(<h2 className={myclassname}>
        {msg}{value}
    </h2>)
}