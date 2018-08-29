export default function namesReducer(state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}

const LOG_IN = 'LOG_IN';
