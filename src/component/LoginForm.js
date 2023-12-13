import React from 'react';
import './LoginForm.css';
import {Link} from 'react-router-dom';
const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic for handling form submission
  };

  return (
    <div className="log-form">
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" title="username" placeholder="username" required/>
        <input type="password" title="password" placeholder="password" required/>
        <button type="submit" className="btn">
          Login
        </button>
        <Link to="/register">Register Now</Link>
        {/* <a className="forgot" href="#">
          Forgot Username?
        </a> */}
      </form>
    </div>
  );
};

export default LoginForm;
