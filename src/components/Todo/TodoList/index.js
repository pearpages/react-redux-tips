import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import AddTodo from "../AddTodo";
import FilterButtons from "../FilterButtons";
import VisibleTodoList from "../VisibleTodoList";
import MyLink from "../MyLink";
import * as FilterActions from "../../../reducers/visibility-filter";
import FILTER from "../../../reducers/filter.models";
import * as Actions from "../../../actions";
import { getLocalTodos, getFilter } from "../../../reducers";
import "./index.scss";

function TodoList({
  title,
  saveList,
  match,
  onSetFilter,
  filter,
  fetch,
  hasUrlFilter,
  todos,
  toggle,
  removeItem
}) {
  if (filter !== (match.params.filter || FILTER.SHOW_ALL)) {
    onSetFilter(match.params.filter || FILTER.SHOW_ALL);
  }

  return (
    <div className="todolist">
      <h4>{title}</h4>
      {!match.params.filter ? <FilterButtons saveList={saveList} /> : null}
      <AddTodo />
      <VisibleTodoList
        filter={filter}
        fetch={fetch}
        hasUrlFilter={hasUrlFilter}
        todos={todos}
        toggle={toggle}
        removeItem={removeItem}
      />
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

// how to use own props
const mapStateToProps = (state, ownProps) => ({
  filter: getFilter(state),
  todos: getLocalTodos(state),
  hasUrlFilter: !!ownProps.match.params.filter
});

// long version:
// const mapDispatchToProps = dispatch => ({
//   onTodoClick: id => dispatch(TODOS.toggle(id)),
//   removeItem: id => dispatch(TODOS.removeItem(id))
// });
// short version:
// const mapDispatchToProps = {
//   onTodoClick: id => TODOS.toggle(id),
//   removeItem: id => TODOS.removeItem(id)
// };
const mapDispatchToProps = {
  ...Actions,
  onSetFilter: filter => FilterActions.set(filter)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
