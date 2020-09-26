import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Todos = ({todos, deleteTodo}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div style = {{background: theme.ui, color: theme.textColor}} className="collection-item" key = {todo.id}>
                    <span onClick = {() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className = "center">You have nothing to do</p>
    );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;