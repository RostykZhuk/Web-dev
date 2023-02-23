import React from 'react';

function App() {
  return (
    <>
      <main
        onClick={(e) => {
          console.log('main');
          console.log(e.target);
        }}
        // onClickCapture={(e) => {
        //   // e.stopPropagation();
        //   console.log('No fun today');
        // }}
      >
        <form
          onClick={(e) => {
            // e.stopPropagation();
            console.log('form');
          }}
        >
          <label
            onClick={(e) => {
              console.log('label');
            }}
          >
            field
            <input type='text' />
          </label>
          <button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Click me
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
