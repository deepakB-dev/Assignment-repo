import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="d-flex justify-content-between align-items-center bg-light p-2 rounded my-2">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`form-check-label ${todo.completed ? "text-decoration-line-through text-success" : ""}`}
        >
          {todo.todo}
        </label>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-sm">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
