import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';


let dummyData = [{ taskText: "Make dinner", completed: true },
{ taskText: "Dig in", completed: false },
{ taskText: "Take over the world", completed: false }]

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {todos:[]
        };
    }
    
    addTodo(taskStr){
        dummyData.push({taskText:taskStr, completed:false})
        this.setState({todos:dummyData})
    }
    componentDidMount(){
        this.setState({todos:dummyData})
    }
    render(){
        return(
            <div>
            <InputLine
            submit={(taskStr)=> this.addTodo(taskStr)}/> 
            <TodoList 
            todos={this.state.todos}/>
            </div>
            )
        }
    }
    
    export default TodoApp 