import React from 'react';

const FilterLink = ({ handleClick, filter, currentFilter, children }) => {
  const isSelected = filter === currentFilter;
  return (
    <button
      onClick={handleClick}
      disabled={isSelected}
      style={{ backgroundColor: isSelected ? "#666" : "inherit" }}
    >
      {children}
    </button>
  );
};

export default FilterLink;
