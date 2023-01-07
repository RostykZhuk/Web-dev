import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return jsx

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }
// the same
const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  );
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
