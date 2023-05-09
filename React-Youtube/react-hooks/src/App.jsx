import { useState } from 'react';
import './App.css';
function App() {
  const [info, setInfo] = useState({});
  return (
    <div className='App'>
      js version
      <input
        value={info.name}
        placeholder='Enter Name'
        onChange={(e) => setInfo((prev) => ({ ...prev, name: e.target.value }))}
      />
      <div>
        <b>Value</b>
        {info.name}
      </div>
    </div>
  );
}

export default App;
