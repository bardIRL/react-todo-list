import React from "react";

export default function TodoItem({ index, todo, handleDeleteTodo }) {
  const handleDelete = function (index) {
    handleDeleteTodo(index);
  };

  return (
    <div key={index}>
      <h2>{todo.title}</h2>
      <p>
        {todo.category} | {todo.description}
      </p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
