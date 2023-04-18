import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = function (formData) {
    setTodos([...todos, formData]);
  };

  const handleDeleteTodo = function (index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>To-Doodle</h1>
      </header>
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
