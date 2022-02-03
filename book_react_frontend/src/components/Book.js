import { useEffect, useState } from "react";
import Books from "./Books";

const Book = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/api/v1/books");
    const data = await response.json();

    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return(
    <>
      <Books books={books}/>
    </>
  );
};

export default Book;
