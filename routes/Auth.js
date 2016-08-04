export default (nextState, replace, next) => {
  const state = nextState.location.state;
  console.log(state);
  if (state) {
    auth(state.credentials)
      .then(() => next())
      .catch(() => {
        replace('/login/error');
        next();
      });
  } else {
    replace('/login/error');
    next();
  }
};

const auth = (creds) => {
  return new Promise((resolve, reject) => {
    return creds.user === 'user' && creds.pass === 'pass' ? resolve() : reject();
  });
};
