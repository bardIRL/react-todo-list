import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = function (formData) {
    setTodos([...todos, formData]);
  };

  return (
    <div className="App">
      <header></header>
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
