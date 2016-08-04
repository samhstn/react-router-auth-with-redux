const defaultState = {
  user: '',
  pass: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_USER':
    return {
      ...state, user: action.payload
    };
  case 'SET_PASS':
    return {
      ...state, pass: action.payload
    };
  default:
    return state;
  }
};

