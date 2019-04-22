import React from "react";
import { withRouter } from "react-router";

import FilterLink from "./FilterLink";
import FILTER from "../../reducers/filter.models";

const FilterButtons = ({ saveList, history }) => {
  const redirect = filter => history.push(filter);

  return (
    <div>
      <div>
        <FilterLink
          handleClick={() => redirect(FILTER.ALL)}
          filter={FILTER.ALL}
        >
          All
        </FilterLink>
        <FilterLink
          handleClick={() => redirect(FILTER.ACTIVE)}
          filter={FILTER.ACTIVE}
        >
          Active
        </FilterLink>
        <FilterLink
          handleClick={() => redirect(FILTER.COMPLETED)}
          filter={FILTER.COMPLETED}
        >
          Completed
        </FilterLink>
      </div>
      <button onClick={() => saveList()}>Save List</button>
    </div>
  );
};

export default withRouter(FilterButtons);
