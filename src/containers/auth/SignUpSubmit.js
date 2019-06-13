import React, { PureComponent } from 'react';
import { signup } from '../../services/auth';
import SignUpForm from '../../components/auth/SignUpForm';

export default class SignUpSubmit extends PureComponent {
  state = {
    email: '',
    password: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    signup(email, password);
    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    return <SignUpForm email={email} password={password} onSubmit={this.onSubmit} onChange={this.onChange} />;
  }
}
