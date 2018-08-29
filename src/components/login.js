import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../ducks/actionCreators/logInActions';

const Login = props => (
  <div>
    <h1>You are Not allowed</h1>
    <button
      onClick={() => {
        props.logIn();
        props.history.push('/protected');
      }}
    >
      login
    </button>
  </div>
);

export default connect(() => ({}), { logIn })(Login);
