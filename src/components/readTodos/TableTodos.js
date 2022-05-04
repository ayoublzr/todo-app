import React from "react"
import ModifyStatus from "../updatTodos/ModifyStatus";
import DeletTodos from "../deletTodos/DeletTodos";
import cone from "../../icons/cone.svg"
import { render } from "react-dom";
import ascendant from "../../icons/ascendant.svg"
import descendant from "../../icons/descendant.svg"
import SignSort from "./signSort";

class TableTodos extends React.Component{

    constructor(props){
        super(props)
        this.state={
            sortedBy:"title",
            orderedBy:"asc"
        }
        
    }
    
        
        sortTodos=(listeOfTodos)=>{

        let copyList=listeOfTodos
        const{sortedBy}=this.state
        
        let listSorted =copyList.sort((currentValue,nextValue)=>{
            if(currentValue[sortedBy].toLowerCase()<nextValue[sortedBy].toLowerCase()){
                return this.state.orderedBy === "asc" ? -1 : 1
            }else if (currentValue[sortedBy].toLowerCase()>nextValue[sortedBy].toLowerCase()){
                return this.state.orderedBy === "asc" ? 1 : -1
            } else {
                return 0
            }

        })
        return listSorted
    }
    handleSort(sortedBy){
        let orderedBy = this.state.orderedBy === "asc" ? "desc" : "asc"
        this.setState({sortedBy:sortedBy,orderedBy:orderedBy})
    }
    
        
        
    
    

    render(){
        return(
            <table className="table">
                <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th style={{cursor:"pointer"}} scope="col" onClick={()=>this.handleSort("title")}>
                            Titre 
                            {this.state.sortedBy==="title"&&
                            <SignSort orderedBy={this.state.orderedBy}/>
                            
                            }
                            </th>
                        <th scope="col">Description</th>
                        <th style={{cursor:"pointer"}} scope="col"onClick={()=>this.handleSort("priority")}>
                            Priorité
                            {this.state.sortedBy==="priority"&&
                            <SignSort orderedBy={this.state.orderedBy}/>
                            
                            }
                            </th>
                        <th style={{cursor:"pointer"}} scope="col"onClick={()=>this.handleSort("status")}>
                            Status
                            {this.state.sortedBy==="status"&&
                            <SignSort orderedBy={this.state.orderedBy}/>
                            
                            }
                            </th>
                        <th style={{cursor:"pointer"}} scope="col"onClick={()=>this.handleSort("createdAt")}>
                            Crée le
                            {this.state.sortedBy==="createdAt"&&
                            <SignSort orderedBy={this.state.orderedBy}/>
                            
                            }
                            </th>
                     </tr>
                </thead>
                <tbody>
                    {
                        this.sortTodos(this.props.listeOfTodos).map((todo,index)=>{
                            let priority=todo.priority==="1"?"Faible":
                                         todo.priority==="2"?"Moyenne":"Forte";
                            let colorPriority=todo.priority==="1"?"green":
                                         todo.priority==="2"?"orange":"red";
                            let status=todo.status==="0"?"à faire"   :
                                       todo.status ==="1"?"en cours" :"Terminée"          
                            let colorStatus=todo.status==="0"?"red"   :
                                       todo.status ==="1"?"yellow" :"green"          
                            return(
                                <tr key ={index}>
                                    <td>{index+1}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td style={{color:colorPriority}}>{priority}</td>
                                    <td style={{background:colorStatus}}>{status}</td>
                                    <td>{todo.createdAt}</td>
                                    <td>
                                        
                                        <ModifyStatus  updateStatus={this.props.updateStatus} todoId={todo.id} status={todo.status} />
                                        <DeletTodos deletTodo={this.props.deletTodo} todoId={todo.id}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                     
                   
                </tbody>
            </table>
        )}
}
export default TableTodos ;