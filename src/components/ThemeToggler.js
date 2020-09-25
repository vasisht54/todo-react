import React, { Component, useContext } from 'react'
import {ThemeContext} from "./ThemeContext"

const ThemeToggler = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return ( 
    <div className = "center"><button className = "btn" onClick = {toggleTheme}>Toggle Dark mode</button></div>
   );
}
 
export default ThemeToggler;