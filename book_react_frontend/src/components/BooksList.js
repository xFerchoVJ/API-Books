import React from 'react';

const BooksList = ({book}) => {
  return (
    <li className='list-group-item mb-3'>
      <h1 className='fs-5'>Title of the book:</h1>
      <p>{book.title}</p>
      <h2>Description of the book:</h2>
      <p>{book.description}</p>
    </li>
  );
};

export default BooksList;
