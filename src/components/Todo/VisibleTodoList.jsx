import React, { useEffect } from "react";
import Todo from "./Todo";

const VisibleTodoList = ({
  filter,
  fetch,
  hasUrlFilter,
  todos,
  toggle,
  removeItem
}) => {
  // updated
  useEffect(() => {
    if (filter) {
      fetch(filter); // fetchData
    }
  }, [filter]);

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
