import React, { Component } from "react";

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

        if (this.state.content === '') {
            alert('Enter something to do!');
        }
        else {

            this.props.addTodo(this.state);
            this.setState({
                content: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="add-todo">Add todo:</label>
                <input onChange={this.handleOnChange} id="add-todo" type="text" value={this.state.content} />
            </form>
        )
    }
}

export default AddTodo;