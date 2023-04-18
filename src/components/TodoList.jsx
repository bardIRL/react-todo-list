import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDeleteTodo }) {
  return (
    <div className="cards-container">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}
