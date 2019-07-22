import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        };
    }

    render() {
      return(
            <ul> {this.props.todos.map((taskObj, index)=> <Todo  
            taskText={taskObj.taskText}
            taskCompleted={taskObj.completed}
            xClick={()=>this.props.todoXClick(index)}
            toggle={()=>this.props.todoToggle(index)}/>)} </ul>
      )}
  }


  export default TodoList 