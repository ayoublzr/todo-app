import React from "react";
import Delet from "../../icons/Delete.svg"

function DeletTodos (props){
    const handlClick=()=>{
        
    }
    return <button onClick={()=>props.deletTodo(props.todoId)} type="button" className="btn btn-danger">
        <img src={Delet} alt="icons"/>
    </button>
}
export default DeletTodos