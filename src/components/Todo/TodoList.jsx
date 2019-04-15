import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import AddTodo from "./AddTodo";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";
import MyLink from "./MyLink";
import * as FilterActions from "../../reducers/visibility-filter";
import FILTER from "../../reducers/filter.models";

function TodoList({ saveList, match, onSetFilter, filter }) {
  if (filter !== (match.params.filter || FILTER.SHOW_ALL)) {
    onSetFilter(match.params.filter || FILTER.SHOW_ALL);
  }

  return (
    <>
      {!match.params.filter ? <Footer saveList={saveList} /> : null}
      <AddTodo />
      <VisibleTodoList />
      <div>
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_ALL)}
          filter={FILTER.SHOW_ALL}
        >
          ALL
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_ACTIVE)}
          filter={FILTER.SHOW_ACTIVE}
        >
          ACTIVE
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_COMPLETED)}
          filter={FILTER.SHOW_COMPLETED}
        >
          COMPLETED
        </MyLink>
      </div>
    </>
  );
}

export default withRouter(
  connect(
    state => ({
      filter: state.visibilityFilter
    }),
    {
      onSetFilter: filter => FilterActions.set(filter)
    }
  )(TodoList)
);
