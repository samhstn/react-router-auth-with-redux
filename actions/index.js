export const setUser = (e) => ({
  type: 'SET_USER',
  payload: e.target.value
});

export const setPass = (e) => ({
  type: 'SET_PASS',
  payload: e.target.value
});
