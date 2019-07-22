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
        componentDidMount(){
            this.setState({todos:dummyData})
        }
        render(){
            return(
                <div>
                    <InputLine/>
                    <TodoList 
                    todos={this.state.todos}/>
                </div>
            )
        }
}

export default TodoApp 