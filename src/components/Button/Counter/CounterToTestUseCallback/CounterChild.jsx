import React from "react";

// const CounterChild = () => {
//   console.log("Child rendered");
//   return <button>Click me</button>;
// };
const CounterChild = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default CounterChild;
