import React from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import FILTER from "../reducers/filter.models";
import * as TODOS from "../reducers/todos";

const TodoItems = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo
        handleClick={() => props.onTodoClick(todo.id)}
        key={todo.id}
        {...todo}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(TODOS.toggle(id))
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
