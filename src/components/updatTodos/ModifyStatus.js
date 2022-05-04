import React from "react"
import cone from "../../icons/cone.svg"
import check from "../../icons/check.svg"
import todo from "../../icons/todo.svg"
function ModifyStatus(props){
  const handlClick=(newStatus)=>{
      props.updateStatus(newStatus, props.todoId)
  }

  if (props.status ==="0"){

    return(
        <>
            <button onClick={()=>handlClick('1')}  type="button" className="btn btn-warning">
                <img src={cone} alt="icons"/>
            </button>
            <button onClick={()=>handlClick('2')} type="button" className="btn btn-success">
                <img src={check} alt="icons"/>
            </button>
        </>
    )
  }
  
  else if (props.status ==="1"){

    return(
        <>
            <button onClick={()=>handlClick('0')} type="button" className="btn btn-info">
                <img src={todo} alt="icons"/>
            </button>
            <button onClick={()=>handlClick('2')} type="button" className="btn btn-success">
                <img src={check} alt="icons"/>
            </button>
        </>
    )
  }
  else if (props.status ==="2"){

    return(
        <>
            <button onClick={()=>handlClick ('0')} type="button" className="btn btn-info">
                <img src={todo} alt="icons"/>
            </button>
            <button onClick={()=>handlClick('1')} type="button" className="btn btn-warning">
                <img src={cone} alt="icons"/>
            </button>
        </>

        )
  }
  
}

export default ModifyStatus