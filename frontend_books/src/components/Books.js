import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksList from "./BooksList";
const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const URL = "http://localhost:3000/api/v1/books";

    const response = await axios(URL);
    const data = response.data;
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <h1>Books from the API!</h1>
      <hr />
      <ul className="list-group">
        {books.map((book) => (
          <BooksList book={book} key={book.id} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
