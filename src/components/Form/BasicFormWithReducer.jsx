import React from "react";
import { useState, useReducer } from "react";
import styles from "./InputForm.module.css";
const BasicFormWithReducer = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  function reducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> Input Form</legend>
          <div className={styles.InputFormContainer}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                value={state.name}
                onChange={(e) =>
                  dispatch({ field: "name", value: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                value={state.email}
                onChange={(e) =>
                  dispatch({ field: "email", value: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                value={state.password}
                onChange={(e) =>
                  dispatch({ field: "password", value: e.target.value })
                }
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default BasicFormWithReducer;
