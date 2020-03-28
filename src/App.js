import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
function App() {
  return (
    <div className="App">
      <AddItem />
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
