import React from "react";
import { connect } from "react-redux";
import * as TodosActions from "../../actions";

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
//   addTodo: value => dispatch(TodosActions.add(value))
// });

export default connect(
  null,
  // short version:
  {
    addTodo: value => TodosActions.add(value)
  }
)(AddTodo);
