import './App.css';
import SolarSystem from './components/SolarSystem.js';
import { useState } from 'react';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';

function App() {
const [form, setForm] = useState('login')
  return (
    <>
      <SolarSystem/>
      {form === 'login' ? <LoginForm/> : <RegisterForm/>}
    </>
  );
}

export default App;
