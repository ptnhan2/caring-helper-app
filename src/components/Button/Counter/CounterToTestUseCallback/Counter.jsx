import React from "react";
import { useState } from "react";
import CounterChild from "./CounterChild";
import { useCallback } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);
  console.log("Parent rendered");
  return (
    <>
      <CounterChild />
      {/* <CounterChild onClick={handleClick} /> */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </>
  );
};

export default Counter;
