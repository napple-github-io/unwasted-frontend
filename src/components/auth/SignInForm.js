import React from 'react';
import PropTypes from 'prop-types';

function SignInForm({ onSubmit, onChange, email, password, className }) {
  return (
    <div className={className}>
      <div>
        <form id="signin" onSubmit={onSubmit}>
          <h2>Sign In</h2>
          <input type="email" name='email' value={email} id="signin-email" placeholder="Email" onChange={onChange} required />
          <input type="password" name='password' value={password} id="signin-password" placeholder="Password" onChange={onChange} required/>
          <div>
            <button>Sign In</button>
          </div>
        </form>

        <section>
          <h2>New Users</h2>
          <div>
            <button>Sign Up</button>
          </div>
        </section>
      </div>
    </div>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SignInForm;
