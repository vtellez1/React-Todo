import React from 'react';
import Todo from './Todo';
import { isTemplateElement } from '@babel/types';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return(
        <div>
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted}/>
            ))}
        </div>
    )
}
export default TodoList