// Todo.js
import React from "react";

const Todo = ({ todo, onRemove }) => (
  <div>
    <span>{todo.text}</span>
    <button className="btn remove" onClick={() => onRemove(todo.id)}>
      Remove
    </button>
  </div>
);

export default Todo;
