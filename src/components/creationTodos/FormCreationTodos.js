import React from "react";
class FormCreationTodos extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            priority:"",
            description:""



        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
        
    }
    handleSubmit(event){
        event.preventDefault()
        const {title ,description,priority}=this.state
        if(title !==""&& description !==""& priority!==""){
            let newTodo={
                id:`${title}-${Math.round(Math.random())*100}`,
                title,
                description,
                priority,
                status :"0",
                createdAt:new Date(Date.now()).toLocaleDateString('fr')

            }
            this.props.addTodo(newTodo)
            this.setState({title:"",description:"",priority:""})
            this.props.toggleModal()
        }
    }
    
    handleChange(e){

        let action = e.currentTarget 
        let inputName = action.name
        let inputValue = action.value

        this.setState({ [inputName] : inputValue })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="m-3">
              <div className="mb-3 text-start">
                    <label htmlFor="title" className="form-label">Tâche :</label>
                    <input style={{backgroundColor :"#d0d2cf"}} name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleChange}></input>
             </div>
              <div className="mb-3 text-start">
                 <label htmlFor="priority" className="form-label ">Priorité :</label>
                 <select style={{backgroundColor :"#d0d2cf"}} name="priority" className="form-select"  aria-label="Default select example" value={this.state.priority}onChange={this.handleChange}>
                    
                        <option disabled value="">choisir la priorité de la tâche</option>
                        <option value="1">Faible</option>
                        <option value="2">Moyen</option>
                        <option value="3">Fort</option>
                 </select>
             </div>
              <div className="mb-3 text-start">
                        <label htmlFor="description" className="form-label">Description :</label>
                        <textarea style={{backgroundColor :"#d0d2cf"}} name="description" className="form-control"  rows="3" value={this.state.description}onChange={this.handleChange}></textarea>
              </div> 
              <button type="submit" className="my-3">Envoyer</button>

            </form>
        )

    }
}
export default FormCreationTodos
