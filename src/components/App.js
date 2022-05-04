import React, {Component} from 'react'
import TableTodos from './readTodos/TableTodos';
import ModalCreationTodos from './creationTodos/ModalCreationTodos';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      listeOfTodos:[]
    }
    this.addTodo=this.addTodo.bind(this)
    this.updateStatus=this.updateStatus.bind(this)
    this.deletTodo=this.deletTodo.bind(this)
    
  }
  addTodo(newTodo){
    this.setState((prevstate)=>{
    return{
      listeOfTodos:[...prevstate.listeOfTodos,newTodo]
    }
    })
             
  }
  deletTodo(todoId){
    let copyState=this.state
    let newState=copyState.listeOfTodos.filter((todo)=>todo.id!==todoId)
    this.setState({listeOfTodos:newState})
  }
    
  
  updateStatus(newStatus,todoId){
    
       let copyState = this.state
       let index =copyState.listeOfTodos.findIndex((todo)=>todo.id===todoId)
 
  copyState.listeOfTodos[index]={
    ...copyState.listeOfTodos[index],
    status:newStatus
  }
 this.setState({...copyState})
}

    componentDidMount(){
      let storage = localStorage.getItem('listeOfTodos')
      if (storage!== null){
        let listTodos =JSON.parse(storage)
        this.setState({listeOfTodos:listTodos})
      }
    }

    componentDidUpdate(){
        
       
        let TodosStringifies = JSON.stringify(this.state.listeOfTodos)
        localStorage.setItem('listeOfTodos',TodosStringifies)

    }
    
  render(){
  return (
  <div >
    <h1 className='text-center my-5 text-white'>My todo App</h1>
    <div className='w-75 p-4 mx-auto shadow-lg bg-light rounded'>
    <TableTodos deletTodo={this.deletTodo} updateStatus={this.updateStatus} listeOfTodos={this.state.listeOfTodos} click={this.click}/>
    </div>
    <div className='my-5  text-center'>
      <ModalCreationTodos addTodo={this.addTodo}/>
    </div>
  </div>
  );
  }
}

export default App;
