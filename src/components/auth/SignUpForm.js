import React from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ onSubmit, onChange, email, password, username, street, state, zip, firstName, lastName, bio, city, className }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <h2>Sign up</h2>
      
      <h5>Email <span>*</span></h5>
      <input type="email" name="email" value={email} id="signup-email" placeholder="Email" onChange={onChange} required />
      
      <h5>Password <span>*</span></h5>
      <input type="password" name="password" value={password} id="signup-password" placeholder="Password" onChange={onChange} required />
      
      <h5>Username <span>*</span></h5>
      <input name="username" value={username} id="signup-username" placeholder="Username" onChange={onChange} required />
      
      <h5>First Name <span>*</span></h5>
      <input name="firstName" value={firstName} id="signup-firstName" placeholder="First Name" onChange={onChange} required />
      
      <h5>Last Name <span>*</span></h5>
      <input name="lastName" value={lastName} id="signup-lastName" placeholder="Last Name" onChange={onChange} required />
      
      <h5>Street Address <span>*</span></h5>
      <input name="street" value={street} id="signup-street" placeholder="Street Address" onChange={onChange} required />
      
      <section>
        <aside>
          <h5>City <span>*</span></h5>
          <input name="city" value={city} id="signup-city" placeholder="City" onChange={onChange} required />
        </aside>
        <aside>
          <h5>State <span>*</span></h5>
          <select id="signup-state" name="state" value={state} onChange={onChange}>
            <option value="AK">AK</option>
            <option value="AR">AR</option>	
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>	
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>	
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>	
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>			
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>	
            <option value="WV">WV</option>
            <option value="WY">WY</option>
          </select>
        </aside>
      </section>

      <h5>Zip Code <span>*</span></h5>
      <input type="string" maxLength="5" minLength="5" name="zip" value={zip} id="signup-zip" placeholder="Zip-Code" onChange={onChange} required />
      
      <h5>Biography</h5>
      <textarea name="bio" value={bio} id="signup-bio" placeholder="Biography" onChange={onChange}></textarea>
      
      <label><input type="checkbox" required />I agree to the <a href="#" target="_new">Terms and Conditions</a></label>

      <div className={className.buttonContainer}>
        <button>Sign Up</button>
      </div>
    </form>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bio: PropTypes.string
};

export default SignUpForm;
