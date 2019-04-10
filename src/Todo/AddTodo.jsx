import React from "react";

const AddTodo = ({ handleClick }) => {
  let input;
  return (
    <>
      <input type="text" ref={node => (input = node)} />
      <button
        onClick={() => {
          handleClick(input.value);
          input.value = "";
        }}
      >
        Add item
      </button>
    </>
  );
};

export default AddTodo;
