import React from 'react';
import ReactDOM from 'react-dom';


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

export default InputLine 