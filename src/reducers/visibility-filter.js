import FILTER from "./filter.models";

const visibilityFilter = (state = FILTER.SHOW_ALL, action) => {
  switch (action.type) {
    case "[FILTER] Set filter":
      return action.filter;
    default:
      return state;
  }
};

export const set = filter => ({
  type: "[FILTER] Set filter",
  filter
});

export default visibilityFilter;
