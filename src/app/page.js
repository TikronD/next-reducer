// Simplified cockie clickerto demonstrate the use of reducer pattern to manage the state values.

"use client";
import { useReducer } from "react";

// A reducer is just a function. The function accepts a state value, the current state, and an action value - the action to perform on the state.
function counterReducer(state, action) {
  // The reducer performs the action and returns the new state value.
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p> {/* Display the actual count */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      {/* Corrected action type */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
