import React, { Component } from "react";
import { connect } from "react-redux";
import { doneCheck } from "./redux/actions";
class TodoList extends Component {
  render() {
    const TodoList = this.props.list
      .filter(todoItem => todoItem.done === this.props.done)
      .map(todoItem => (
        <div className="custom-control custom-checkbox" key={todoItem.id}>
          <li className="list-group-item d-flex justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              checked={todoItem.done}
              onChange={() => {
                this.props.doneCheck(todoItem);
              }}
            />

            <label className="custom-control-label" htmlFor="customCheck1">
              {todoItem.name}
            </label>
          </li>
        </div>
      ));
    return (
      <div>
        <div className="d-flex justify-content-between">
          <p className="lead">{this.props.done ? "Done" : "To Do"}</p>
        </div>
        <ul className="list-group list-group-flush border px-4">{TodoList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.todoState.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doneCheck: list => dispatch(doneCheck(list))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
