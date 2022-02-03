import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Books from '../components/Books';
import NewBook from '../components/NewBook';

const RoutesBook = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/booksAPI"
          element={<Books/>}
        />
        <Route
          path="/new_book"
          element={<NewBook/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesBook;
