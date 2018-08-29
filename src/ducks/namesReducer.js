export default function namesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, names: [...state.names, action.payload] };
    default:
      return state;
  }
}

const ADD_NAME = 'ADD_NAME';
