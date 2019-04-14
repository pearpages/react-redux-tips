import React from "react";
import { connect } from "react-redux";

function Filter({ handleClick, isSelected, children, filter }) {
  return (
    <button
      onClick={() => handleClick()}
      disabled={isSelected}
      style={isSelected ? { backgroundColor: "#666", color: "white" } : null}
    >
      {children}
    </button>
  );
}

const mapStateToProps = (state, props) => ({
  isSelected: state.visibilityFilter === props.filter
});

export default connect(
  mapStateToProps,
  null
)(Filter);
