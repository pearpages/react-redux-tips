import FILTER from "../reducers/filter.models";

export default {
  localTodos: {
    allIds: [0, 1, 2],
    byId: {
      0: {
        id: 0,
        text: "Task 1",
        completed: true
      },
      1: {
        id: 1,
        text: "Task 2",
        completed: true
      },
      2: {
        id: 2,
        text: "Task 3",
        completed: true
      }
    }
  },
  remoteTodos: {
    byId: {},
    listByFilter: {
      [FILTER.ALL]: { ids: [], isFetching: false },
      [FILTER.ACTIVE]: { ids: [], isFetching: false },
      [FILTER.COMPLETED]: { ids: [], isFetching: false }
    }
  },
  visibilityFilter: FILTER.ALL
};
