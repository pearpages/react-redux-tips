import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import store from "./store/store";
import { saveState } from "./store/local-store-data";

export default function Root() {
  const saveList = () => {
    saveState(store.getState());
    alert("Saved!");
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:filter?" component={App} saveList={saveList} />
      </BrowserRouter>
    </Provider>
  );
}
