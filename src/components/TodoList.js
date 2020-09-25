import React from 'react';
import uuid from 'uuid/dist/v1';
import ThemeContextProvider from './ThemeContext';
import Todos from './Todos';
import ThemeToggler from './ThemeToggler';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodo] = React.useState([
      {id: uuid(), content: "Buy parathas"},
      {id: uuid(), content: "Clean up the kitchen counter"},
      {id: uuid(), content: "Watch 'The Office'"}
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodo([
      ...updatedTodos
    ])
  };

  const addTodo = (todo) => {
    todo.id = uuid();
    setTodo([
      ...todos, todo
    ])
  };

  return ( 
    <div className="todo-app container">
        <ThemeContextProvider>
          <h1 className="center red-text">To-do List</h1>
          <div className="center">Click on an item to delete it</div>
          <Todos todos = {todos} deleteTodo = {deleteTodo}/>
          <AddTodo addTodo = {addTodo} />
          <ThemeToggler/>
        </ThemeContextProvider>
      </div>
   );
}

export default TodoList;