//barbara

//alert('app.js ran!');
// const React = require('react');
// const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
//import Todo from '../../react-todo-codealong-7-22/reactApp/components/Todo';

let dummyData = ['Make dinner', 'Go to the gym', 'Take over the world ']

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
                {this.props.task}
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
            <ul> {dummyData.map((taskName)=> <Todo
            task={taskName}/>)} </ul>
      )}
  }


ReactDOM.render(<TodoList />,
    document.getElementById('root'));