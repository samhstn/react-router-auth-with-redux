import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Auth from './Auth.js';

import App from './App.js';

import Login from './Login/index.js';
import Errors from './Login/error.js';

import Main from './Main/index.js';
import Sub1 from './Main/Sub1.js';
import Sub2 from './Main/Sub2.js';

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/login' />
    <Route path='login' component={Login}>
      <Route path='error' component={Errors} />
    </Route>
    <Route path='main' component={Main} onEnter={Auth}>
      <Route path='sub1' component={Sub1} />
      <Route path='sub2' component={Sub2} />
    </Route>
  </Route>
);
