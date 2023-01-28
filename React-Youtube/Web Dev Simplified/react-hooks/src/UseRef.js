import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function UseRef() {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const prevName = useRef('');

  function focus() {
    inputRef.current.focus();
    inputRef.current.value = 'Some value';
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>focus</button>
    </>
  );
}

export default UseRef;
