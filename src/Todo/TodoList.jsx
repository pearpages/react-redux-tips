import React from "react";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoItems from "./TodoItems";

export default function Todos() {
  return (
    <>
      <AddTodo />
      <TodoItems />
      <Footer />
    </>
  );
}
