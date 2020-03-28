import React, { Component } from "react";
import { connect } from "react-redux";
import { doneCheck, deleteAll, deleteItem } from "./redux/actions";
class TodoList extends Component {
  render() {
    const TodoList = this.props.list
      .filter(todoItem => todoItem.done === this.props.done)
      .map(todoItem => (
        <div className="custom-control custom-checkbox" key={todoItem.id}>
          <li className="list-group-item d-flex justify-content-between bg-transparent">
            <input
              type="checkbox"
              className="custom-control-input"
              id={todoItem.id}
              checked={todoItem.done}
              onChange={() => {
                this.props.doneCheck(todoItem);
              }}
            />

            <label className="custom-control-label" htmlFor={todoItem.id}>
              {todoItem.done ? <s>{todoItem.name}</s> : todoItem.name}
            </label>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteItem(todoItem);
              }}
            >
              <i className="fa fa-2x fa-trash" aria-hidden="true"></i>
            </button>
          </li>
        </div>
      ));
    return (
      <div>
        <div className="d-flex justify-content-between">
          <p className="lead">{this.props.done ? "Done" : "To Do"}</p>
          {this.props.done ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteAll();
              }}
            >
              Clear All
            </button>
          ) : (
            ""
          )}
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
    doneCheck: list => dispatch(doneCheck(list)),
    deleteAll: () => dispatch(deleteAll()),
    deleteItem: list => dispatch(deleteItem(list))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
