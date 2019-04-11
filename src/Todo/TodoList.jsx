import React from "react";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoItems from "./TodoItems";

export default function Todos({ saveList }) {
  return (
    <>
      <Footer saveList={saveList} />
      <AddTodo />
      <TodoItems />
    </>
  );
}
