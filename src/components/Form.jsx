import React from "react";
import { useState } from "react";

export default function Form({ handleAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();
    handleAddTodo({ title, description, category });
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <label htmlFor="description">Description</label>
      <input
        name="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <label htmlFor="category">Category</label>
      <select
        name="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option default value="">
          -- Select category --
        </option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Social">Social</option>
      </select>
      <button type="submit">+</button>
    </form>
  );
}
