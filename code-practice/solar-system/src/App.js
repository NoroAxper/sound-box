import './App.css';
import SolarSystem from './components/SolarSystem';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

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
