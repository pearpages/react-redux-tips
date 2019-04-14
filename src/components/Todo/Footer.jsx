import React from "react";
import { withRouter } from "react-router";

import FilterLink from "./FilterLink";
import FILTER from "../../reducers/filter.models";

const Footer = ({ saveList, history }) => {
  const redirect = filter => history.push(filter);

  return (
    <div>
      <div>
        <FilterLink
          handleClick={() => redirect(FILTER.SHOW_ALL)}
          filter={FILTER.SHOW_ALL}
        >
          All
        </FilterLink>
        <FilterLink
          handleClick={() => redirect(FILTER.SHOW_ACTIVE)}
          filter={FILTER.SHOW_ACTIVE}
        >
          Active
        </FilterLink>
        <FilterLink
          handleClick={() => redirect(FILTER.SHOW_COMPLETED)}
          filter={FILTER.SHOW_COMPLETED}
        >
          Completed
        </FilterLink>
      </div>
      <button onClick={() => saveList()}>Save List</button>
    </div>
  );
};

export default withRouter(Footer);
