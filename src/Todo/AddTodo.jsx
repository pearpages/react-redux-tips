import React from "react";
import { connect } from "react-redux";

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

const mapDispatchToProps = dispatch => ({
  addTodo: value => dispatch({ type: "ADD_TODO", text: value})
});

export default connect(null, mapDispatchToProps)(AddTodo);
