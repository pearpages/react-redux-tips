import counter from "./src/counter";
import * as ACTIONS from "./src/counter";

it("Should run all these tests", () => {
  expect(counter(0, ACTIONS.increment())).toEqual(1);
  expect(counter(1, ACTIONS.increment())).toEqual(2);
  expect(counter(2, ACTIONS.drecrement())).toEqual(1);
  expect(counter(1, ACTIONS.drecrement())).toEqual(0);
  expect(counter(1, { type: "WHATEVER" })).toEqual(1);
});
