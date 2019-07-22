//barbara

//alert('app.js ran!');
// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
//import Todo from '../../react-todo-codealong-7-22/reactApp/components/Todo';

let dummyData = [{ taskText: "Make dinner", completed: true },
{ taskText: "Dig in", completed: false },
{ taskText: "Take over the world", completed: false }]

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
                <button> X </button>
                {this.props.taskCompleted ? <strike>{this.props.taskText}</strike>: this.props.taskText}
                </span>
            </li>
        )
    }    
}

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        };
    }

    render() {
      return(
            <ul> {dummyData.map((taskObj)=> <Todo
            taskText={taskObj.taskText}
            taskCompleted={taskObj.completed}/>)} </ul>
      )}
  }

class InputLine extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        };
    }
    render(){
        return(
            <span>
                <input type="text"/>
                <button> Add Todo</button>
            </span>
        )
    }
}

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        };
    }

        render(){
            return(
                <div>
                    <InputLine/>
                    <TodoList/>
                </div>
            )
        }
}


ReactDOM.render(<TodoApp />,
    document.getElementById('root'));