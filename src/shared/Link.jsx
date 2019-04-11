import React from "react";
import { NavLink } from "react-router-dom";

import FILTER from "../reducers/filter.models";

export default ({ filter, children }) => (
  <NavLink to={filter !== FILTER.SHOW_ALL ? filter : ""}>{children}</NavLink>
);
