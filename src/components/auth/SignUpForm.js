import React from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ onSubmit, onChange, email, password }) {
  return (
    <form id="signup" onSubmit={onSubmit}>
      <h2>Sign up</h2>
      <input type="email" name='email' value={email} id="signup-email" placeholder="Email" onChange={onChange} required />
      <input type="password" name='password' value={password} id="signup-password" placeholder="Password" onChange={onChange} required/>
      <button>Sign Up</button>
    </form>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default SignUpForm;
