import React from 'react';

const BooksList = ({book}) => {
  const { title, description } = book;
  return(
    <li className='list-group-item list-group-item-dark mb-4 rounded'>
      <h2 className='m-0'>Title of the Book:</h2>
      <p className='m-0'>{title}</p>
      <hr/>
      <h4 className='m-0'>Description of the Book:</h4>
      <p className='m-0'>{description}</p>
    </li>
  );
};

export default BooksList;
