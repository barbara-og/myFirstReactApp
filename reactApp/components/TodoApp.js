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

    removeTodo(index){
        dummyData.splice(index, 1)
        this.setState({todos:dummyData})
    }
    toggleTodo(index){
        {this.state.todos[index].completed===true ? this.state.todos[index].completed=false: this.state.todos[index].completed=true}
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
            todos={this.state.todos}
            todoXClick={(index)=> this.removeTodo(index)}
            todoToggle={(index)=> this.toggleTodo(index)}/>
            </div>
            )
        }
    }
    
    export default TodoApp 