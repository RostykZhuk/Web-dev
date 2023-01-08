import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// css
const books = [
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660911061l/2.jpg',
    title: 'Harry Potter and the Order of the Phoenix',
    author: ' J.K. Rowling, Mary GrandPré',
  },
];
const names = ['john', 'Peter', 'Susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
function BookList() {
  return <section className='booklist'>{newName}</section>;
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
