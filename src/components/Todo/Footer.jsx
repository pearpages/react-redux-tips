import React from "react";

import FilterLink from "./FilterLink";
import FILTER from "../../reducers/filter.models";

const Footer = ({ saveList }) => (
  <div>
    <div>
      <FilterLink filter={FILTER.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={FILTER.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={FILTER.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
    <button onClick={() => saveList()}>Save List</button>
  </div>
);

export default Footer;
