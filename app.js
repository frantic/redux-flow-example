import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import SettingsScreen from './components';
import {createStore} from './store';

function App(props) {
  return (
    <Provider store={props.store}>
      <SettingsScreen />
    </Provider>
  );
}

const store = createStore();
ReactDOM.render(<App store={store} />, document.getElementById('content'));
