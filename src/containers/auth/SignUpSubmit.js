import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { signup } from '../../services/auth';
import SignUpForm from '../../components/auth/SignUpForm';
import styles from './SignUp.css';
import { postImageToApi } from '../../services/listingsApi';

export default class SignUpSubmit extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    street: '',
    state: 'OR',
    zip: '',
    bio: '',
    city: '',
    error: '',
    file: null,
    userImage: ''
  }

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  imageOnChange = ({ target }) => {
    this.setState({
      file: target.files[0]
    });
  }

  imageSubmit = event => {
    event.preventDefault();
    return postImageToApi(this.state.file)
      .then(res => {
        this.setState({ userImage: res.file });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, username, lastName, firstName, street, state, bio, city, zip, userImage } = this.state;

    signup(email, password, username, street, state, firstName, lastName, zip, bio, city, userImage)
      .then(signUpResponse => {
        if(signUpResponse.authId){
          this.props.history.push('/signin');
        } else {
          //WORK ON GETTING ERROR REPORT
          this.setState({ error: 'Unable to signup this user, please try again' });
        }
      });
  }

  render() {
    const { email, password, username, street, state, zip, lastName, firstName, bio, city, error, userImage } = this.state;
    return (
      <div className={styles.signUpBody}>
        <header className={styles.header}>
          <a href="/"><aside className={styles.headerLogo}></aside></a>
        </header>

        <main className={styles.main}>
          <SignUpForm
            email={email}
            password={password}
            username={username}
            street={street}
            state={state}
            zip={zip}
            firstName={firstName}
            lastName={lastName}
            bio={bio}
            city={city}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            className={styles.forms}
            error={error}
            imageOnChange={this.imageOnChange}
            imageSubmit={this.imageSubmit}
            userImage={userImage}
          />
        </main>

        <footer className={styles.footer}>
          <section>
            <a href="/" target="_blank"><img src="../../src/assets/icons/fbicongrey.svg" alt="Facebook" /></a>
            <a href="/" target="_blank"><img src="../../src/assets/icons/twittericongrey.svg" alt="Twitter" /></a>
            <a href="/" target="_blank"><img src="../../src/assets/icons/igicongrey.svg" alt="Instagram" /></a>
          </section>

          <ul className={styles.bottom}>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; Unwasted 2019</li>
          </ul>
        </footer>
      </div>

    );
  }
}
