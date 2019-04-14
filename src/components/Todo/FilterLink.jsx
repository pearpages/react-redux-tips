import React from "react";
import { connect } from "react-redux";

import * as FilterActions from "../../reducers/visibility-filter";

function Filter({ setFilter, isSelected, children, filter }) {
  return (
    <button
      onClick={() => setFilter(filter)}
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

// short version without dispatch
const mapDispatchToProps = {
  setFilter: filter => FilterActions.set(filter)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
