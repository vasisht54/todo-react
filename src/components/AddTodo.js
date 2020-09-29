import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const AddTodo = (props) => {

  const [content, setContent] = useState('');

  const handleOnChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') {
      alert('Enter something to do!');
    }
    else {
      props.dispatch({type: 'ADD_TODO', todo: {
        content
      }});
      setContent('');
    }
  }


  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
      <form style ={{background: theme.ui, color: theme.textColor}} onSubmit={handleSubmit}>
        <label htmlFor="add-todo">Add todo:</label>
        <input required style ={{color: theme.textColor}} onChange={handleOnChange} id="add-todo" type="text" value={content} />
      </form>
  )
};

export default AddTodo;