import React from "react";
import { NavLink } from "react-router-dom";

import FILTER from "../../reducers/filter.models";

export default ({ filter, children, handleOnClick }) => (
  <NavLink
    onClick={() => handleOnClick()}
    to={filter !== FILTER.ALL ? filter : ""}
  >
    {children}
  </NavLink>
);
