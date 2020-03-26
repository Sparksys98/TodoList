import React from "react";
import "./App.css";
import TodoList from "./TodoList";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <TodoList done={false} />
        </div>
        <div className="col">
          <TodoList done={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
