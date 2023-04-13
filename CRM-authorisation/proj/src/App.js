import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route exact path='/' Component={HomePage} />
      <Route exact path='/login' Component={LoginPage} />
      <Route exact path='/register' Component={RegisterPage} />
    </Routes>
  );
}

export default App;
