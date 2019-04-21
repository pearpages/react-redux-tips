import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import "./App.css";
import TodoList from "./Todo/TodoList";
import * as FilterActions from "../reducers/visibility-filter";
import * as Actions from "../actions";
import { getLocalTodos, getFilter } from "../reducers";

function App({
  match,
  saveList,
  filter,
  fetch,
  hasUrlFilter,
  todos,
  toggle,
  removeItem,
  onSetFilter
}) {
  return (
    <div className="App">
      {console.log(
        "comes from the <Route> but you can use 'withRouter'",
        match
      )}
      <header className="App-header">
        <TodoList
          title="Local"
          filter={filter}
          fetch={fetch}
          hasUrlFilter={hasUrlFilter}
          todos={todos}
          toggle={toggle}
          match={match}
          removeItem={removeItem}
          saveList={saveList}
          onSetFilter={onSetFilter}
        />
        <TodoList
          title="Remote"
          filter={filter}
          fetch={fetch}
          hasUrlFilter={hasUrlFilter}
          todos={todos}
          toggle={toggle}
          match={match}
          removeItem={removeItem}
          saveList={saveList}
          onSetFilter={onSetFilter}
        />
      </header>
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
  )(App)
);
