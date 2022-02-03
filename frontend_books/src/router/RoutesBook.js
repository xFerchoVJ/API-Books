import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Books from '../components/Books';

const RoutesBook = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/booksAPI"
          element={<Books/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesBook;
