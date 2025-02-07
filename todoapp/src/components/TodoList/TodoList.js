import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="mt-4 w-100">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p className="text-center">No tasks found.</p>
      )}
    </ul>
  );
};

export default TodoList;
