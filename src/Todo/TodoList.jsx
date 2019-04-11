import React from "react";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoItems from "./TodoItems";
import MyLink from "../shared/Link";
import FILTER from "../reducers/filter.models";

export default function Todos({ saveList, filter }) {
  return (
    <>
      {!filter ? <Footer saveList={saveList} /> : null}
      <AddTodo />
      <TodoItems filter={filter} />
      <div>
        <MyLink filter={FILTER.SHOW_ALL}>ALL</MyLink> |{" "}
        <MyLink filter={FILTER.SHOW_ACTIVE}>ACTIVE</MyLink> |{" "}
        <MyLink filter={FILTER.SHOW_COMPLETED}>COMPLETED</MyLink>
      </div>
    </>
  );
}
