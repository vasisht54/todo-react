import React from 'react';
import Todos from "./ui-components/Todos"

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

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">To-do List</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;