import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://cookie-stand-api-lilac.vercel.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        // Optionally, you can handle the successful registration, e.g., redirect the user to login.
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        // Handle registration error, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      // Handle other errors, e.g., network issues.
    }
  };

  return (
    <div className="bg-desert p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-nintendo-green">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-nintendo-brown">Choose a Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-nintendo-brown rounded-md shadow-sm placeholder-nintendo-brown focus:outline-none focus:ring focus:border-nintendo-brown"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-nintendo-brown">Enter a Verifiable Email Address</label> 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-nintendo-brown rounded-md shadow-sm placeholder-nintendo-brown focus:outline-none focus:ring focus:border-nintendo-brown"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-nintendo-brown">Choose a Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-nintendo-brown rounded-md shadow-sm placeholder-nintendo-brown focus:outline-none focus:ring focus:border-nintendo-brown"
          />
        </div>
        <div>
          <button
            type="button" // Change to "submit" if you want to submit the form
            onClick={handleRegister}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-nintendo-red hover:bg-nintendo-blue focus:outline-none focus:ring focus:border-nintendo-red rounded-md"
          >
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
