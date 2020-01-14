import React from "react";

function Todo(props) {
  return (
    <div
      className={`todo${props.todo.completed ? ` completed` : ""}`}
      onClick={() => props.toggleTodo(props.todo.id, props.todo.task)}>
      <p>{props.todo.task}</p>
    </div>
  );
}

export default Todo;
