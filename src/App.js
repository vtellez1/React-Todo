import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state ={
    todos: todos
  };
}

addTask = newTaskText =>{
  const newTask={
    task: newTaskText,
    id: Date.now(),
    completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTask]
  });
}

toggleCompleted = id =>{
this.setState({
  todos: this.state.todos.map(item =>{
    if (item.id === id){
      return {
        ...item,
        completed: !item.completed
      }
    } else{
      return item;
      }
    })
  })
}

filterCompleted = id =>{
  this.setState({
    todos: this.state.todos.filter(item =>{
      return !item.completed;
    }

    )
  })
}

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>My Todo App!</h2>
        </div> 

        <div className="TodoList">
        <TodoList 
        toggleCompleted={this.toggleCompleted} 
        todos={this.state.todos}/>
        </div>
      
        <TodoForm filterCompleted={this.filterCompleted} addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
