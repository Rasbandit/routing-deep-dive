import { createStore, combineReducers } from 'redux';
import loggedIn from './ducks/loggedInReducer';
import names from './ducks/namesReducer';

const defaultState = { names: ['todd', 'mike', 'adam', 'bearjew'], loggedIn: false };

const store = createStore(combineReducers({ loggedIn, names }), defaultState);

export default store;
