import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import FILTER from "../reducers/filter.models";
import * as TODOS from "../reducers/todos";

const TodoItems = props => (
  <>
    {props.hasUrlFilter ? <div>Is using URL filter</div> : null}
    <ul>
      {props.todos.map(todo => (
        <Todo
          handleClick={() => props.onTodoClick(todo.id)}
          removeItem={() => props.removeItem(todo.id)}
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  </>
);

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter || state.visibilityFilter
  ),
  hasUrlFilter: !!ownProps.filter
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(TODOS.toggle(id)),
  removeItem: id => dispatch(TODOS.removeItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItems);

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case FILTER.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed === false);
    case FILTER.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true);
    case FILTER.SHOW_ALL:
    default:
      return todos;
  }
}
