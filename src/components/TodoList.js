import React, { useReducer, useEffect } from 'react';
import ThemeContextProvider from '../contexts/ThemeContext';
import Todos from './Todos';
import ThemeToggler from './ThemeToggler';
import AddTodo from './AddTodo';
import {TodoReducer} from '../reducers/TodoReducer';

const TodoList = () => {

  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return ( 
    <div className="todo-app container">
        <ThemeContextProvider>
          <h1 className="center red-text">To-do List</h1>
          <ThemeToggler/>
          <div className="center">Click on an item to delete it</div>
          <Todos todos = {todos} dispatch = {dispatch}/>
          <AddTodo dispatch = {dispatch} />
        </ThemeContextProvider>
      </div>
   );
}

export default TodoList;