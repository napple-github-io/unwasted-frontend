/* eslint-disable react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/getUserActions';
import SignInForm from '../../components/auth/SignInForm';
import styles from './SignIn.css';
import fbiconwhite from '../../assets/icons/fbiconwhite.svg';
import twittericonwhite from '../../assets/icons/twittericonwhite.svg';
import igiconwhite from '../../assets/icons/igiconwhite.svg';

class SignInSubmit extends PureComponent {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

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
    this.props.signIn(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.signInBody}>
        <header className={styles.header}>
          <a href="/"><aside className={styles.headerLogo}></aside></a>
        </header>

        <footer className={styles.footer}>
          <section>
            <a href="/" target="_blank"><img src={fbiconwhite} alt="Facebook" /></a>
            <a href="/" target="_blank"><img src={twittericonwhite} alt="Twitter" /></a>
            <a href="/" target="_blank"><img src={igiconwhite} alt="Instagram" /></a>
          </section>

          <ul className={styles.bottom}>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; Unwasted 2019</li>
          </ul>
        </footer>

        <main className={styles.main}>
          <section>
            <h1>Let's<br />Get<br />Started!<br /></h1>
          </section>

          <SignInForm className={styles.forms} email={email} password={password} onSubmit={this.onSubmit} onChange={this.onChange} />
        </main>

        
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  signIn(email, password) {
    dispatch(signInUser(email, password));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignInSubmit);
