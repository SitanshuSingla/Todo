import React from "react";

import TodoList from "./Components/TodoList/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";

function App() {
  return (
    <div className="container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
