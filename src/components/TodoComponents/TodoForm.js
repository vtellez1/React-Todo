import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            newTask: ''
        }
    }

    handleChanges = e => {
        this.setState({ newTask: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({
            newTask: ''
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newTask} onChange={ this.handleChanges} type="text" name="item"/>
                <button>Add ToDo</button>
                <button> Clear Completed</button>
            </form>
        );
    }
}
export default TodoForm;