import counter from "../reducers/counter";
import * as ACTIONS from "../reducers/counter";

it("Should run all these tests", () => {
  expect(counter(0, ACTIONS.increment())).toEqual(1);
  expect(counter(1, ACTIONS.increment())).toEqual(2);
  expect(counter(2, ACTIONS.decrement())).toEqual(1);
  expect(counter(1, ACTIONS.decrement())).toEqual(0);
  expect(counter(1, { type: "WHATEVER" })).toEqual(1);
});
