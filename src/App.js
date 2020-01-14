import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./Todo.css";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data
    };
  }

  clearTodo = () => {
    const editTodoList = this.state.todo.filter(
      todos => todos.completed === false
    );

    this.setState({
      todo: editTodoList
    });
  };

  toggleTodo = id => {
    // find the item we clicked on
    // toggle the purchased field
    // update state with the new grocery data
    const newTodoList = this.state.todo.map(todos => {
      if (todos.id === id) {
        return {
          ...todos,
          completed: !todos.completed
        };
      } else {
        return todos;
      }
    });
    // update todo
    this.setState({
      todo: newTodoList
    });
  };

  addTodo = todoname => {
    const newTodo = {
      task: todoname,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Todo list</h1>
          <TodoForm addTodo={this.addTodo} todo={this.state.todo} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
