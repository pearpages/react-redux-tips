import React from "react";

import Todo from "./Todo";
import FetchError from "../FetchError";

const VisibleTodoList = ({
  hasUrlFilter,
  todos,
  toggle,
  removeItem,
  isLoading,
  error
}) => {
  if (!!error) {
    return <FetchError message={error} onRetry={() => alert("retry!")} />;
  } else if (isLoading) {
    return <div>Loading...</div>;
  }
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
