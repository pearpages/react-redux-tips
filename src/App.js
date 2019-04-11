import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Todo/TodoList";
import todos from "./reducers/todos";
import visibilityFilter from "./reducers/visibility-filter";
const store = createStore(combineReducers({ todos, visibilityFilter }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
