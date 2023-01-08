import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// css

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'Suzanne Collins';
const Book = () => {
  const title = 'The Hunger Games';
  return (
    <article className='book'>
      <img
        src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
