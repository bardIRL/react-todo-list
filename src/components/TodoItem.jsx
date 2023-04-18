import React from "react";

export default function TodoItem({ index, todo, handleDeleteTodo }) {
  const handleDelete = function (index) {
    handleDeleteTodo(index);
  };

  return (
    <div className="card" key={index}>
      <h2>{todo.title}</h2>
      <div className="text-content">
        <p>
          <strong>{todo.category}</strong>
        </p>
        <p>{todo.description ? todo.description : null}</p>
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        ✔️
      </button>
    </div>
  );
}
