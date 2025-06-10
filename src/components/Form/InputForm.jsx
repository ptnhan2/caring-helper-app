import React from "react";
import styles from "./InputForm.module.css";
import { useState } from "react";

const InputForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const updatedUser = {...user};
        updatedUser[inputName] = inputValue;
        setUser(updatedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <fieldset >
            <legend> Input Form</legend>
            <div className={styles.InputFormContainer}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </div>
          </fieldset>

        </form>
    </>
  );
};

export default InputForm;
