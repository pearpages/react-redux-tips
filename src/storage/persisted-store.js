import FILTER from "../reducers/filter.models";

export default {
  todos: [
    {
      id: 0,
      text: "Task 1",
      completed: true
    },
    {
      id: 1,
      text: "Task 2",
      completed: true
    },
    {
      id: 2,
      text: "Task 3",
      completed: true
    }
  ],
  visibilityFilter: FILTER.SHOW_COMPLETED
};
