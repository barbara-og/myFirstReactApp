import React from 'react';
import ReactDOM from 'react-dom';


class InputLine extends React.Component {
    constructor(props){
        super(props);
        this.state = {typedText:''
        };
    }

    handleTyping(event){
        this.setState({typedText:event.target.value})
    }
    handleSubmit(){
        this.props.submit(this.state.typedText)
        this.setState({typedText:''})
    }
    render(){
        return(
            <span>
                <input type="text" onChange={(event)=>this.handleTyping(event)} value={this.state.typedText}/>
                <button onClick={()=>this.handleSubmit()}> Add Todo</button>
            </span>
        )
    }
}

export default InputLine 