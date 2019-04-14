import React from "react";
import { connect } from "react-redux";
import * as TODO from "../../reducers/todos";

const AddTodo = ({ addTodo }) => {
  let input;
  return (
    <>
      <input type="text" ref={node => (input = node)} />
      <button
        onClick={() => {
          addTodo(input.value);
          input.value = "";
        }}
      >
        Add item
      </button>
    </>
  );
};

// long version:

// const mapDispatchToProps = dispatch => ({
//   addTodo: value => dispatch(TODO.add(value))
// });

export default connect(
  null,
  // short version:
  {
    addTodo: value => TODO.add(value)
  }
)(AddTodo);
