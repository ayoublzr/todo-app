import React from "react";
import FormCreationTodos from "./FormCreationTodos";

class ModalCreationTodos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false

        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleModal(){
        this.setState((prevstate) =>{
            return{
            isOpen :!prevstate.isOpen
        }
        })
    }
    
    
    render(){
       
        let dispaly= this.state.isOpen? "block" : "none"

        return(
            <React.Fragment>
           
<button onClick={this.toggleModal} type="button" className="btn btn-warning py-2 px-3 " >
 Ajouter une tâche
</button>


<div className="modal"  style={{display :dispaly ,backgroundColor :"#0009"}}  >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" >Ajouter une tâche</h5>
        <button onClick={this.toggleModal} type="button" className="btn-close"  ></button>
      </div>
      <div className="modal-body">
        <FormCreationTodos addTodo={this.props.addTodo} toggleModal={this.toggleModal}/>
      </div>
      
    </div>
  </div>
</div>
</React.Fragment>
        )
    }
}
export default ModalCreationTodos