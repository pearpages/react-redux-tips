import React from 'react'

export default function Filter({handleClick, isSelected, children}) {
  return (
    <button
      onClick={() => handleClick()}
      disabled={isSelected}
      style={{ backgroundColor: isSelected ? "#666" : "inherit" }}
    >
      {children}
    </button>
  )
}
