import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      localStorage.setItem('activeUser', email);
      navigate('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}