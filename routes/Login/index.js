import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor () {
    super();
    this.loginSubmitAction = this.loginSubmitAction.bind(this);
  }

  loginSubmitAction (e) {
    e.preventDefault();
    const user = e.target.querySelector('input[type=text]').value;
    const pass = e.target.querySelector('input[type=password]').value;
    this.props.router.push({
      pathname: '/main/sub1',
      state: {
        credentials: {user, pass}
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={(e) => {this.loginSubmitAction(e);}}>
          <span>Username:</span>
          <input type='text' required />
          <span>Password:</span><input type='password' required />
          <button type='submit'>Submit</button>
        </form>
        {!this.props.children || this.props.children}
      </div>
    );
  }
}

export default withRouter(Login);
