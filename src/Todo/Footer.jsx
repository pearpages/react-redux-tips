import React from 'react';

import FilterLink from './FilterLink';

const Footer = ({ visibilityFilter, handleClick }) => (
    <p>
      <FilterLink
        currentFilter={visibilityFilter}
        filter="SHOW_ALL"
        handleClick={() => handleClick("SHOW_ALL")}
      >
        All
      </FilterLink>
      <FilterLink
        currentFilter={visibilityFilter}
        filter="SHOW_ACTIVE"
        handleClick={() => handleClick("SHOW_ACTIVE")}
      >
        Active
      </FilterLink>
      <FilterLink
        currentFilter={visibilityFilter}
        filter="SHOW_COMPLETED"
        handleClick={() => handleClick("SHOW_COMPLETED")}
      >
        Completed
      </FilterLink>
    </p>
  );

  export default Footer;