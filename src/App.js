import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import TodoList from "./Todo/TodoList";
import todos from "./reducers/todos";
import visibilityFilter from "./reducers/visibility-filter";
import persistedStore from "./store/persisted-store";
import { loadState } from "./store/local-store-data";
const store = createStore(
  combineReducers({ todos, visibilityFilter }),
  loadState() || persistedStore
);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <TodoList />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
