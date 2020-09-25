import React from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo"
import ThemeContextProvider from './components/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: "Buy parathas"},
      {id: 2, content: "Clean up the kitchen counter"},
      {id: 3, content: "Watch 'The Office'"}
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {

    return (
      <div className="todo-app container">
        <ThemeContextProvider>
          <h1 className="center red-text">To-do List</h1>
          <div className="center">Click on an item to delete it</div>
          <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
          <AddTodo addTodo = {this.addTodo} />
          <ThemeToggler/>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;