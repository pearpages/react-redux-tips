import React from "react";
import { withRouter } from "react-router";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoItems from "./TodoItems";
import MyLink from "../shared/Link";
import FILTER from "../reducers/filter.models";

function Todos({ saveList, match }) {
  return (
    <>
      {!match.params.filter ? <Footer saveList={saveList} /> : null}
      <AddTodo />
      <TodoItems />
      <div>
        <MyLink filter={FILTER.SHOW_ALL}>ALL</MyLink> |{" "}
        <MyLink filter={FILTER.SHOW_ACTIVE}>ACTIVE</MyLink> |{" "}
        <MyLink filter={FILTER.SHOW_COMPLETED}>COMPLETED</MyLink>
      </div>
    </>
  );
}

export default withRouter(Todos);
