import React from 'react';

import Todo from './Todo';

const TodoItems = ({ todos, handleToggle }) => (
  <ul>
    {todos.map(todo => (
      <Todo handleClick={() => handleToggle(todo.id)} key={todo.id} {...todo} />
    ))}
  </ul>
);

export default TodoItems;
