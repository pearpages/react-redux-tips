import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import TodoList from "./Todo/TodoList";
import todos from "./reducers/todos";
import visibilityFilter from "./reducers/visibility-filter";
import persistedStore from "./store/persisted-store";
import { loadState, saveState } from "./store/local-store-data";
const store = createStore(
  combineReducers({ todos, visibilityFilter }),
  loadState() || persistedStore
);

class App extends Component {
  saveList = () => {
    saveState(store.getState());
    alert("Saved!");
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h4>The famous todo-list!</h4>
            <TodoList saveList={this.saveList} />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
