import React, { Component } from "react";
import { connect } from "react-redux";
import { doneCheck, deleteAll, deleteItem } from "./redux/actions";
class TodoList extends Component {
  render() {
    const TodoList = this.props.list
      .filter(todoItem => todoItem.done === this.props.done)
      .map(todoItem => (
        <div className="custom-control custom-checkbox" key={todoItem.id}>
          <li className="list-group-item list-group-flush d-flex justify-content-between bg-transparent ">
            <div className=" justify-content-between d-flex">
              <input
                type="checkbox"
                className="custom-control-input d-flex"
                id={todoItem.id}
                checked={todoItem.done}
                onChange={() => {
                  this.props.doneCheck(todoItem);
                }}
              />

              <label className="custom-control-label" htmlFor={todoItem.id}>
                {todoItem.done ? (
                  <p>
                    <s>{todoItem.name}</s>
                  </p>
                ) : (
                  <h4 className="text-justify mb-auto">{todoItem.name}</h4>
                )}
              </label>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-circle"
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
          <h2 className=" mx-5 text-justify lmao2 ">
            {this.props.done ? "Done" : "To Do"}
          </h2>
          {this.props.done ? (
            <button
              type="button"
              className="btn btn-danger mx-5"
              onClick={() => {
                this.props.deleteAll();
              }}
            >
              Clear All!
            </button>
          ) : (
            ""
          )}
        </div>
        <ul className="list-group list-group-flush border-top border-bottom border-secondary mx-5">
          {TodoList}
        </ul>
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
