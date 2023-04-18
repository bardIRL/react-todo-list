import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

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
        <img width="100px" alt="doodle guy" src="/doodleguy.png"></img>
      </header>
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
      <footer>
        <p>
          <strong>Created by Meghan Bucher</strong>
        </p>
        <p>Image by rawpixel.com</p>
      </footer>
    </div>
  );
}
