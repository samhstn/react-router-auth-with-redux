import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { setUser, setPass } from '../../actions/index.js';

class Login extends Component {
  constructor () {
    super();
    this.submitAction = this.submitAction.bind(this);
  }

  submitAction (e, login) {
    e.preventDefault();
    this.props.router.push({
      pathname: '/main/sub1',
      state: {
        credentials: login
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={(e) => {this.submitAction(e, this.props.login);}}>
          <span>Username:</span><input type='text' onChange={this.props.setUser} required />
          <span>Password:</span><input type='password' onChange={this.props.setPass} required />
          <button type='submit'>Submit</button>
        </form>
        {!this.props.children || this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps, { setUser, setPass })(withRouter(Login));
