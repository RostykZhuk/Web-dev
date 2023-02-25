import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({ isConfirmed: false });

  const toggle = () => {
    setData({ isConfirmed: true });
    console.log(data);
  };

  return (
    <main>
      <h1>Functional Component</h1>
      <p>{data.isConfirmed === true ? 'true' : 'false'}</p>
      <button onClick={toggle}>Toggle</button>
    </main>
  );
}

export default App;
