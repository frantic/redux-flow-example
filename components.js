// @flow

import React from 'react';
import {logIn, logOut} from './actions';
import {connect} from 'react-redux';

import type {Dispatch} from './store';

type Props = {
  userName: string;
  dispatch: Dispatch;
};

export function SettingsScreen(props: Props) {
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
