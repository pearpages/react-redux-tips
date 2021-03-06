import { v4 } from "node-uuid";

import FILTER from "../reducers/filter.models";

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "hey",
      completed: true
    },
    {
      id: v4(),
      text: "ho",
      completed: true
    },
    {
      id: v4(),
      text: "let’s go",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(1500).then(() => {
    const randomError = Math.random();
    if (randomError > 0.3) {
      throw Error("Random error");
    }
    switch (filter) {
      case FILTER.ALL:
        return fakeDatabase.todos;
      case FILTER.ACTIVE:
        return fakeDatabase.todos.filter(t => !t.completed);
      case FILTER.COMPLETED:
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = { id: v4(), text, completed: false };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
