import React from "react";

export default function TodoItem({ index, todo, handleDeleteTodo }) {
  const handleDelete = function (index) {
    handleDeleteTodo(index);
  };

  return (
    <div className="card" key={index}>
      <h2>{todo.title}</h2>
      <p>
        <strong>{todo.category}</strong> | {todo.description}
      </p>
      <button className="delete-btn" onClick={handleDelete}>
        ✔️
      </button>
    </div>
  );
}
