import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import "./App.css";
import TodoList from "./Todo/TodoList";
import * as FilterActions from "../reducers/visibility-filter";
import * as Actions from "../actions";
import { getLocalTodos, getFilter, getRemoteTodos } from "../reducers";

function App({
  match,
  saveList,
  filter,
  fetch,
  hasUrlFilter,
  localTodos,
  remoteTodos,
  toggle,
  removeItem,
  onSetFilter
}) {
  // updated
  useEffect(() => {
    if (filter) {
      fetch(filter); // fetchData
    }
  }, [filter]);

  return (
    <div className="App">
      {console.log(
        "comes from the <Route> but you can use 'withRouter'",
        match
      )}
      <header className="App-header">
        <TodoList
          title="Local"
          hasUrlFilter={hasUrlFilter}
          todos={localTodos}
          filter={filter}
          toggle={toggle}
          match={match}
          removeItem={removeItem}
          saveList={saveList}
          onSetFilter={onSetFilter}
        />
        <TodoList
          title="Remote"
          hasUrlFilter={hasUrlFilter}
          todos={remoteTodos}
          filter={filter}
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
  localTodos: getLocalTodos(state),
  remoteTodos: getRemoteTodos(state),
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
