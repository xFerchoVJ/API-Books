import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewBook = () => {
  const initialState = {
    title: "",
    description: "",
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const URL = "http://localhost:3000/api/v1/books";
    const { title, description } = inputs;
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: URL,
        data: {
          title,
          description,
        },
      });
    } catch (error) {
      console.error("Error al enviar datos: ", error);
      throw new Error();
    }
    setInputs(initialState);
  };

  return (
    <div className="container mt-2">
      <h1>Add a new BOOK HERE!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title of the book
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description for the book
          </label>
          <textarea
            id="description"
            className="form-control"
            name="description"
            value={inputs.description}
            style={{ resize: "none" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="/booksAPI" className="btn btn-primary mt-4">
        See all the books
      </Link>
    </div>
  );
};

export default NewBook;
