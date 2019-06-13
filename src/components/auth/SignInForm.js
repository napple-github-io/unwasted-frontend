import React from 'react';
import PropTypes from 'prop-types';

function SignInForm({ onSubmit, onChange, email, password }) {
  return (
    <form id="signin" onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <input type="email" name='email' value={email} id="signup-email" placeholder="Email" onChange={onChange} required />
      <input type="password" name='password' value={password} id="signup-password" placeholder="Password" onChange={onChange} required/>
      <button>Sign In</button>
    </form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default SignInForm;
