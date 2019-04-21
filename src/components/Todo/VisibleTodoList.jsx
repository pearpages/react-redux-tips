import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Todo from "./Todo";
import * as Actions from "../../actions";
import { getLocalTodos, getFilter } from "../../reducers";

const VisibleTodoList = props => {
  const fetchData = () => {
    const { filter, fetch } = props;
    fetch(filter);
  };

  // updated
  useEffect(() => {
    if (props.filter) {
      fetchData();
    }
  }, [props.filter]);

  return (
    <>
      {props.hasUrlFilter ? <div>Is using URL filter</div> : null}
      <ul>
        {props.todos.map(todo => (
          <Todo
            handleClick={() => props.toggle(todo.id)}
            removeItem={() => props.removeItem(todo.id)}
            key={todo.id}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
};

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
  ...Actions
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodoList)
);
