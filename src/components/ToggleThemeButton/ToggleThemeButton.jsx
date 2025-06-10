import React from "react";
import styles from "./ToggleThemeButton.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ToggleThemeButton = () => {
    
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme);
    
    return (
            <button onClick={toggleTheme}>Toggle Theme</button>
    )
}
export default ToggleThemeButton;