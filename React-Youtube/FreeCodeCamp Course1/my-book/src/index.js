import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';
import SpecificBook from './Book';
// css

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
