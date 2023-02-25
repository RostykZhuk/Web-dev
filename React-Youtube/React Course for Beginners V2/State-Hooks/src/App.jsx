import { useState } from 'react';
import './App.css';

function ComponentWithInnerState({ counter }) {
  console.log('counter', counter);
  const [state, setState] = useState(counter);

  return (
    <>
      <h2>Inner Counter: {state}</h2>

      <div>
        <button onClick={() => setState(state + 1)}>Increment</button>
      </div>
    </>
  );
}

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>App Counter: {state}</h1>

      <div>
        <button onClick={() => setState(state + 1)}>Increment</button>
      </div>
      <ComponentWithInnerState counter={state} />
    </>
  );
}

export default App;
