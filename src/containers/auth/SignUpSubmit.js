import React, { PureComponent } from 'react';
import { signup } from '../../services/auth';
import SignUpForm from '../../components/auth/SignUpForm';

export default class SignUpSubmit extends PureComponent {
  state = {
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    street: '',
    state: 'OR',
    zip: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, username, lastName, firstName, street, state, zip } = this.state;
    signup(email, password, username, street, state, firstName, lastName, zip);
    this.setState({ email: '', password: '', username:'', firstName:'', lastName:'', street:'', state:'', zip:'' });
  }

  render() {
    const { email, password, username, street, state, zip, lastName, firstName } = this.state;
    return <SignUpForm
      email={email}
      password={password}
      username={username}
      street={street}
      state={state}
      zip={zip}
      firstName={firstName}
      lastName={lastName}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
    />;
  }
}
