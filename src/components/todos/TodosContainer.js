import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
class TodosContainer extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((text, id) => (
          <Todo key={id} text={text} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodosContainer);
