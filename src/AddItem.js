import React, { Component } from "react";
import { connect } from "react-redux";

// Action Creators
import * as actionCreators from "./redux/actions";

class AddItem extends Component {
  state = {
    name: ""
  };

  handleChange = e => this.setState({ name: e.target.value });

  submitItem = () => {
    if (this.state.name) {
      this.props.addItem(this.state.name);
      this.setState({ name: "" });
    }
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.submitItem();
  };

  render() {
    return (
      <div className="col-6 mx-auto">
        <div className="input-group input-group-lg my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Item..."
            value={this.state.name}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            aria-label="Item"
            aria-describedby="add-button"
          />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              id="add-button"
              onClick={this.submitItem}
            >
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </button>
          </div>
        </div>
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
    addItem: name => dispatch(actionCreators.addItem(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
