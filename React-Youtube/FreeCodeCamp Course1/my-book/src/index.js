import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// css
const firstBook = {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
};
const secondBook = {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660911061l/2.jpg',
  title: 'Harry Potter and the Order of the Phoenix',
  author: ' J.K. Rowling, Mary GrandPré',
};
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
