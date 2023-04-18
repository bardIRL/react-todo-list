import React from "react";
import Form from "./components/Form";

export default function App() {
  const todos = [];

  const handleAddTodo = function (formData) {
    todos.push(formData);
    console.log(todos);
  };

  return (
    <div className="App">
      <header></header>
      <Form handleAddTodo={handleAddTodo} />
    </div>
  );
}
