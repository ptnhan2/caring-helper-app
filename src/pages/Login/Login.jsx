import React from "react";
import styles from "./Login.module.css";
import InputForm from "../../components/Form/InputForm";
import ToggleThemeButton from "../../components/ToggleThemeButton/ToggleThemeButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const Login = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={`${styles.loginContainer} ${styles[theme]}`}>
            <h1>Login Page</h1>

            <InputForm />
            <ToggleThemeButton />
        </div>
    )
}
export default Login
