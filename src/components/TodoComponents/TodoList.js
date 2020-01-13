// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className='todo-list'>
      {props.todo.map(todos => (
        <Todo key={todos.id} todo={todos} toggleTodo={props.toggleTodo} />
      ))}
      <button className='clear-btn' onClick={props.clearTodo}>
        Clear Completed Todos
      </button>
    </div>
  );
}

export default TodoList;
