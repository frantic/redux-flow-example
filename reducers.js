const initialState = {
  isLoggedIn: false,
  userName: 'unknown'
};

export function user(state = initialState, action) {
  if (action.type === 'LOGGED_IN') {
    return {
      isLoggedIn: true,
      userName: action.userName
    };
  }

  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }

  return state;
}
