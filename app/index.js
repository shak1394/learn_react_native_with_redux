import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './stores/store';

const store = configureStore()

export default class LearningApplication extends Component {
  render() {
    return(
      // <Provider> allows us to access the store for dispatching actions and receiving data from
      // the state in it's children i.e. <App/>
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}