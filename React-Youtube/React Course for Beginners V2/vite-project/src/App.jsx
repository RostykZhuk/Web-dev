import './App.css';

import user from './user.json';

function App() {
  const mailMe = `mail.to:${user.email}`;
  return (
    <main className='App'>
      <h1>about me</h1>
      <div>Name: {user.name}</div>
      <div>
        Skills <div>css:{user.skills.css}</div>
      </div>
      <ul>
        {user.hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>
      <a href={mailMe}>Email me</a>
    </main>
  );
}

export default App;
