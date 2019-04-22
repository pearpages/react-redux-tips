import React from "react";
import Todo from "./Todo";

const VisibleTodoList = ({ hasUrlFilter, todos, toggle, removeItem }) => {
  return (
    <>
      {hasUrlFilter ? <div>Is using URL filter</div> : null}
      <ul>
        {todos.map(todo => (
          <Todo
            handleClick={() => toggle(todo.id)}
            removeItem={() => removeItem(todo.id)}
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
};

export default VisibleTodoList;
