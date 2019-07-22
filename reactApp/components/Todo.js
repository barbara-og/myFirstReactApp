import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        };
        }
    render(){
        return(
            <li>
                <span>
                <button onClick={(index)=> this.props.xClick(index)}> X </button>
                {this.props.taskCompleted ? <strike>{this.props.taskText}</strike>: this.props.taskText}
                {this.props.taskCompleted ? <input type="checkbox" checked="true" onChange={(index)=>this.props.toggle(index)}/>
                : <input type="checkbox" onChange={(index)=>this.props.toggle(index)}/>}
                </span>
            </li>
        )
    }    
}

export default Todo 