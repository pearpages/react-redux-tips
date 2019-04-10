const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const set = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export default visibilityFilter;
