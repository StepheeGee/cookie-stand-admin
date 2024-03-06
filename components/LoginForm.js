// components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <div className="bg-desert p-8 rounded-md shadow-md m-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-nintendo-green">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-nintendo-brown">Username</label>
          <input
            name="username"
            type="text"
            required
            placeholder="Username"
            className="w-full px-3 py-2 border border-nintendo-brown rounded-md shadow-sm placeholder-nintendo-brown focus:outline-none focus:ring focus:border-nintendo-brown text-black" // Add text-black here
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-nintendo-brown">Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full px-3 py-2 border border-nintendo-brown rounded-md shadow-sm placeholder-nintendo-brown focus:outline-none focus:ring focus:border-nintendo-brown text-black" // Add text-black here
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-nintendo-red hover:bg-nintendo-blue focus:outline-none focus:ring focus:border-nintendo-red rounded-md"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
