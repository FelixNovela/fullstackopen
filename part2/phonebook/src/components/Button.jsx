const Button = ({idP, deletePersonNumber}) =>{
    return(
         <button onClick={()=>deletePersonNumber(idP)}>delete</button>
    )
   
}

export default Button