import { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import CookieStandAdmin from '../components/CookieStandAdmin';
import CookieStandHeader from '../components/Header';
import Footer from '../components/Footer';
import jwt from 'jsonwebtoken';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt.decode(token);
      if (user) setIsLoggedIn(true);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setMessage('');
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setMessage('Successfully logged out.');
  };

  const handleRegister = async (username, email, password) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful, please log in.');
        setIsRegistering(false);
        setMessage('');
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  const toggleShowRegistration = () => setIsRegistering(!isRegistering);

  return (
    <div>
      <CookieStandHeader /> {/* Include the header component */}
      {!isLoggedIn ? (
        <>
          {message && <div className="alert alert-success">{message}</div>}
          {isRegistering ? (
            <>
              <RegistrationForm onRegister={handleRegister} />
              <p className="text-center mt-4">
                Already have an account?{' '}
                <button
                  onClick={() => setIsRegistering(false)}
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Login
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm onLogin={handleLogin} />
              <p className="text-center mt-4">
                { /* Don't have an account? */}
                { "Don't have an account? " }
                <button
                  onClick={toggleShowRegistration}
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Register
                </button>
              </p>
            </>
          )}
        </>
      ) : (
        <>
          <CookieStandAdmin onLogout={handleLogout} />
        </>
      )}
      <Footer nlocation={'OnlyAtlanta'} />

     
    </div>
  );
}
