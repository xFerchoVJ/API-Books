import React from "react";
import BooksList from "./BooksList";

const Books = ({ books }) => {
  return (
    <div>
      <h2>BOOKS!</h2>
      <hr />
      {books.map((book) => (
        <ul className="list-group">
          <BooksList key={book.id} book={book} />
        </ul>
      ))}
    </div>
  );
};

export default Books;
