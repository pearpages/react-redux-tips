import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).not.toBe(undefined);
});
