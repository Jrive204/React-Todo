import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./Todo.css";
import SearchForm from "./components/TodoComponents/SearchForm";

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
  userTodo;
  constructor() {
    super();
    this.state = {
      todo: data,
      search: ""
    };
  }
  handleSearchChanges = e => {
    // update state with each keystroke
    this.setState({
      search: e.target.value
    });
  };

  clearSearch = () => {
    this.setState({
      search: ``
    });
    document.getElementById("formsearch").reset();
  };

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

  // componentDidMount() {
  //   this.userTodo = JSON.parse(localStorage.getItem("user"));
  //   if (localStorage.getItem("user")) {
  //     this.setState({
  //       todo: this.userTodo.todo,
  //       search: this.userTodo.search
  //     });
  //   } else {
  //     this.setState({
  //       todo: data,
  //       search: ""
  //     });
  //   }
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem("user", JSON.stringify(nextState));
  // }

  render() {
    localStorage.setItem("todo", JSON.parse(this.state.todo));

    return (
      <div className='App'>
        <SearchForm handleSearchChanges={this.handleSearchChanges} />
        <div className='header'>
          <h1>Todo list</h1>
          <TodoForm
            addTodo={this.addTodo}
            todo={this.state.todo}
            clearSearch={this.clearSearch}
          />
        </div>
        <TodoList
          search={this.state.search}
          todo={this.state.todo}
          toggleTodo={this.toggleTodo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
