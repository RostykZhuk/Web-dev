import React from 'react';
import ReactDOM from 'react-dom';

// Nested Component, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Rostyk Zhuk</h2>;
const Message = () => <p>This is my react app</p>;

ReactDOM.render(<Greeting />, document.getElementById('root'));
