import React from "react";
import TodoApp from "./components/TodoApp/TodoApp.js";

const App = () => {
  return (
    <div className="flex justify-center" style={{background: "#f0f0f0", height: "100vh"}}>
      <TodoApp />
    </div>
  );
};

export default App;
