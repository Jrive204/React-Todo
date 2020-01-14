import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      todoText: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    let name = this.props.todo.map(ele => ele.task);
    console.log(this.props.todo, `todo`);
    console.log(name, "todo.task");
    console.log(this.state.todoText, "text");
    if (name.includes(this.state.todoText)) {
      return alert("Task already exist");
    } else {
      this.props.addTodo(this.state.todoText);
      console.log(this.props.clearSearch, `search`);
      this.props.clearSearch();
      this.setState({
        todoText: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          id='form'
          required
          type='text'
          name='item'
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}
