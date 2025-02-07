import React, { useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
  
    if (savedTodos && JSON.parse(savedTodos).length > 0) {
      setTodos(JSON.parse(savedTodos));
      setLoading(false);

    } else {
      fetch("https://dummyjson.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          const initialTodos = data.todos.slice(0, 5);
          setTodos(initialTodos);
          localStorage.setItem("todos", JSON.stringify(initialTodos)); // Save fetched data
          setLoading(false);
        })
        .catch((error) =>{ 
          console.error("Error fetching todos:", error)
          setLoading(false);

        });
    }
  }, []);
  
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), todo: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="m-auto d-flex flex-column justify-content-center align-items-center h-100" style={{ maxWidth: "500px" }}>
      <h2 className="text-center pt-3 pb-3">📝 To-Do List</h2>
      {loading ? <p>Loading...</p> :
    (<>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </> 
    )
}
    </div>
  );
};

export default TodoApp;
