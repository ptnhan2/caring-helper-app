import React, { createContext, useState } from "react";

//Tạo context
export const ThemeContext = createContext();

//Tạo provider để bọc ứng dụng
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
