import { createStore } from "redux";

import counter from "./reducers/counter";

const store = createStore(counter);

it("Should run some tests", () => {
  expect(Object.keys(store)).toEqual([
    "dispatch",
    "subscribe",
    "getState",
    "replaceReducer"
  ]);
  expect(store.getState()).toBe(0);
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "INCREMENT" });
  expect(store.getState()).toBe(2);
  store.dispatch({ type: "DECREMENT" });
  store.dispatch({ type: "DECREMENT" });
  store.dispatch({ type: "DECREMENT" });
  expect(store.getState()).toBe(-1);
});
