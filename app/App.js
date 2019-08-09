/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MainScreen from './views/MainScreen';
import store from './reducers/store';
import { Provider } from 'react-redux';

class App extends Component{
  render(){
    return (
        <Provider store={store}>
          <MainScreen /> 
        </Provider>
    );
  }
};

export default App;
