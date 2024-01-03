import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h3 className="login-title">Log In</h3>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      
      <label htmlFor="Submit"></label>
      <button type="submit" id="Submit" class="btn btn-primary">Sign in</button>
      
    </div>
    
  );
};

export default LoginForm;

