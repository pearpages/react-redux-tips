import React from "react";

import "./App.css";
import TodoList from "./Todo/TodoList";

function App({ match, saveList }) {
  return (
    <div className="App">
      <header className="App-header">
        <h4>The famous todo-list!</h4>
        <TodoList filter={match.params.filter} saveList={saveList} />
      </header>
    </div>
  );
}

export default App;
