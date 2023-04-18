import React from "react";
import Form from "./components/Form";

export default function App() {
  const handleFormSubmit = function (formData) {
    console.log(formData);
  };

  return (
    <div className="App">
      <header></header>
      <Form handleFormSubmit={handleFormSubmit} />
    </div>
  );
}
