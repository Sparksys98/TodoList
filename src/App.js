import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import AddItem from "./AddItem";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="text-center lmao">
          <img
            src="https://image.flaticon.com/icons/svg/1632/1632670.svg"
            width="35"
            height="35"
            class="d-inline-block align-top"
            alt="nigga"
          />
        </div>
      </nav>
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
