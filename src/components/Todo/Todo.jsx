import React from "react";

const Todo = ({ handleClick, completed, text, removeItem }) => (
  <li style={{ textDecoration: completed ? "line-through" : "none" }}>
    <span onClick={() => handleClick()}>{text}</span>
    <button onClick={() => removeItem()}>REMOVE</button>
  </li>
);

export default Todo;
