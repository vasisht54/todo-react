import React, { useContext } from 'react'
import {ThemeContext} from "../contexts/ThemeContext"

const ThemeToggler = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return ( 
    <div className = "center">
      <button className = "btn" onClick = {toggleTheme}>Toggle Dark mode</button>
    </div>
   );
}
 
export default ThemeToggler;