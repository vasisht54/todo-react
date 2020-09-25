import React from 'react';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <TodoList />
    </div>
  );

  // state = {
  //   todos: [
  //     {id: uuid(), content: "Buy parathas"},
  //     {id: uuid(), content: "Clean up the kitchen counter"},
  //     {id: uuid(), content: "Watch 'The Office'"}
  //   ]
  // };

  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     todos
  //   })
  // }

  // addTodo = (todo) => {
  //   todo.id = uuid();
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos
  //   })
  // }

  // render() {

    // return (
    //   {/* <div className="todo-app container">
    //     <ThemeContextProvider>
    //       <h1 className="center red-text">To-do List</h1>
    //       <div className="center">Click on an item to delete it</div>
    //       <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
    //       <AddTodo addTodo = {this.addTodo} />
    //       <ThemeToggler/>
    //     </ThemeContextProvider>
    //   </div> */}
    //  <div classN>

    //  </div>
    // );
 // }
}

export default App;