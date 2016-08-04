import React from 'react';
import { withRouter } from 'react-router';

const Login = ({ router, children }) => {
  let u, p;

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: '/main/sub1',
          state: {
            credentials: {
              user: u.value,
              pass: p.value
            }
          }
        });
      }}>
        <span>Username:</span>
        <input type='text' ref={(node) => {
          u = node;
        }} required
        />
        <span>Password:</span>
        <input type='password' ref={(node) => {
          p = node;
        }} required
        />
        <button type='submit'>Submit</button>
      </form>
      {!children || children}
    </div>
  );
};

export default withRouter(Login);

