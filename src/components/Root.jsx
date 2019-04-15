import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";
import configureStore from "../reducers";
import { saveState } from "../storage/local-store-data";

export default function Root() {
  const store = configureStore();

  const saveList = () => {
    saveState(store.getState());
    alert("Saved!");
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route
          path="/:filter?"
          render={props => <App saveList={saveList} {...props} />}
        />
      </BrowserRouter>
    </Provider>
  );
}
