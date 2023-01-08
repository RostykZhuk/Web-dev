import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052._SY475_.jpg'
    alt=''
  />
);

const Title = () => <h1>The Hunger Games</h1>;
const Author = () => <h4>Suzanne Collins</h4>;
ReactDOM.render(<BookList />, document.getElementById('root'));
