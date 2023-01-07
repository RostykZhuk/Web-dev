import React from 'react';
import ReactDOM from 'react-dom';

// return single element
// div/section article/React.Fragment
// use camelCase for html attribute
// className instead class
// close every element
// formatting

function Greeting() {
  return (
    <div className=''>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href='#'>Hello Rostyk</a>
        </li>
        <img src='' alt='' />
        <input type='text' />
      </ul>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
