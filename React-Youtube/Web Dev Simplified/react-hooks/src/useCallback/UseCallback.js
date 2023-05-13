import React, { useState, useCallback, useMemo } from 'react';
import List from './List';

function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + 1 + inc, number + 2 + inc];
    },
    [number]
  );
  //   Error
  //   const getItems = useMemo(
  //     (inc) => {
  //       return [number + inc, number + inc, number + inc];
  //     },
  //     [number]
  //   );
  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
