import React from "react";
import { useState, useReducer } from "react";
import styles from "./IncreaseQuantityButton.module.css";

const IncreaseQuantityButton = () => {
  const initialState = { count: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Quantity of products: {state.count}</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
};

export default IncreaseQuantityButton;
