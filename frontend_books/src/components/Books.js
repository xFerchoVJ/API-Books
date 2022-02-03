import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksList from "./BooksList";
import { Link } from "react-router-dom";
const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const URL = "http://localhost:3000/api/v1/books";

    const response = await axios(URL);
    const data = response.data;
    setBooks(data);
  };

  const noBooks = <h1>No books :c </h1>;

  const bookShow = (
    <ul className="list-group">
      {books.map((book) => (
        <BooksList book={book} key={book.id} />
      ))}
    </ul>
  );

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <p className="my-2">Do you want to add some books?</p>
      <Link to="/new_book" className="btn btn-primary mb-4">
        Clik me then!
      </Link>
      <h1>Books from the API!</h1>
      <hr />
      {books.length > 0 ? bookShow : noBooks}
    </div>
  );
};

export default Books;
