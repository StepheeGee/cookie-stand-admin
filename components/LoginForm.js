// components/LoginForm.js
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-green-300 p-8 rounded-3xl">
      <label className="px-5 text-black">Username</label>
      <input
        className="w-10/12 text-black"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />
      <label className="px-5 text-black">Password</label>
      <input
        className="w-10/12 text-black"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <button
        className="text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
