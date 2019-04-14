import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Todo from "./Todo";
import * as TODOS from "../../reducers/todos";
import { getVisibleTodos } from "../../reducers";

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

// how to use own props
const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, state.visibilityFilter),
  hasUrlFilter: !!ownProps.match.params.filter
});

// long version:
// const mapDispatchToProps = dispatch => ({
//   onTodoClick: id => dispatch(TODOS.toggle(id)),
//   removeItem: id => dispatch(TODOS.removeItem(id))
// });
// short version:
const mapDispatchToProps = {
  onTodoClick: id => TODOS.toggle(id),
  removeItem: id => TODOS.removeItem(id)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoItems)
);
