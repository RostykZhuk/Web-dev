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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsa aut
          aperiam quod laudantium, consequatur in ea corporis, hic aliquid ex
          eveniet tenetur dicta veniam cumque ut accusantium doloribus.
          Possimus?
        </p>
      </Book>
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
