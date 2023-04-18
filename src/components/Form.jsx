import React from "react";
import { useState } from "react";

export default function Form({ handleFormSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");

  const handleSubmit = function (event) {
    event.preventDefault();
    handleFormSubmit({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("normal");
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
      <label htmlFor="priority">Priority</label>
      <select
        name="priority"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="highest">Highest</option>
        <option value="normal">Normal</option>
        <option value="lowest">Lowest</option>
      </select>
      <button type="submit">+</button>
    </form>
  );
}
