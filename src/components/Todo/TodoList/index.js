import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import AddTodo from "../AddTodo";
import FilterButtons from "../FilterButtons";
import VisibleTodoList from "../VisibleTodoList";
import MyLink from "../MyLink";
import * as FilterActions from "../../../reducers/visibility-filter";
import FILTER from "../../../reducers/filter.models";
import "./index.scss";

function TodoList({ title, saveList, match, onSetFilter, filter }) {
  if (filter !== (match.params.filter || FILTER.SHOW_ALL)) {
    onSetFilter(match.params.filter || FILTER.SHOW_ALL);
  }

  return (
    <div className="todolist">
      <h4>{title}</h4>
      {!match.params.filter ? <FilterButtons saveList={saveList} /> : null}
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
    </div>
  );
}

export default withRouter(
  connect(
    // stateProps
    state => ({
      filter: state.visibilityFilter
    }),
    // dispatchProps
    {
      onSetFilter: filter => FilterActions.set(filter)
    }
  )(TodoList)
);
