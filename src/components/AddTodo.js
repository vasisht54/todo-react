import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class AddTodo extends Component {
    state = {
      content: ''
    }

    handleOnChange = (e) => {
        this.setState({
          content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.content.trim() === '') {
          alert('Enter something to do!');
        }
        else {
          this.props.addTodo(this.state);
          this.setState({
              content: ''
          })
        }
    }

    static contextType = ThemeContext;

    render() {
      const {isLightTheme, light, dark} = this.context;
      const theme = isLightTheme ? light : dark;
      return (
          <form style ={{background: theme.ui, color: theme.textColor}} onSubmit={this.handleSubmit}>
            <label htmlFor="add-todo">Add todo:</label>
            <input required style ={{color: theme.textColor}} onChange={this.handleOnChange} id="add-todo" type="text" value={this.state.content} />
          </form>
      )
    }
}

export default AddTodo;