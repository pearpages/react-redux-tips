import React from "react";

const Todo = ({ handleClick, completed, text, removeItem }) => (
  <li
    onClick={() => handleClick()}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
    <button onClick={() => removeItem()}>REMOVE</button>
  </li>
);

export default Todo;
