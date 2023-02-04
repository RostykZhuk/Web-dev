import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BookList from './pages/BookList';
import Book from './pages/Book';
import Home from './pages/Home';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
