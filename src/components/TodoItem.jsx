import React from "react";

export default function TodoItem({ index, todo }) {
  return (
    <div key={index}>
      <h2>{todo.title}</h2>
      <p>
        {todo.category} | {todo.description}
      </p>
    </div>
  );
}
