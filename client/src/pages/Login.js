import React, { useState } from 'react';
import { login } from '../services/api';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const token = await login();
      console.log('Logged in with token:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login with SSO'}
      </button>
    </div>
  );
};

export default Login;
