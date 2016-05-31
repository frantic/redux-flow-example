import React from 'react';
import {logIn, logOut} from './actions';
import {connect} from 'react-redux';

export function SettingsScreen(props) {
  return (
    <div>
      <div>
        Hello, {props.userName}!
      </div>
      <button onClick={() => props.dispatch(logIn('foo', 'bar'))}>
        Log in
      </button>
      <button onClick={() => props.dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}

export default connect((store) => ({
  userName: store.user.userName,
}))(SettingsScreen);
