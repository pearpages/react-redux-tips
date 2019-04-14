import React from "react";

import "./App.css";
import TodoList from "./Todo/TodoList";

function App({ match, saveList }) {
  return (
    <div className="App">
      {console.log(
        "comes from the <Route> but you can use 'withRouter'",
        match
      )}
      <header className="App-header">
        <h4>The famous todo-list!</h4>
        <TodoList saveList={saveList} />
      </header>
    </div>
  );
}

export default App;
