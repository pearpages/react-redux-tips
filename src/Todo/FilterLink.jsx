import React from "react";
import { connect } from "react-redux";

import * as FilterActions from "../reducers/visibility-filter";

function Filter({ setFilter, isSelected, children, filter }) {
  return (
    <button
      onClick={() => setFilter(filter)}
      disabled={isSelected}
      style={{ backgroundColor: isSelected ? "#666" : "inherit" }}
    >
      {children}
    </button>
  );
}

const mapStateToProps = (state, props) => ({
  isSelected: state.visibilityFilter === props.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(FilterActions.set(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
