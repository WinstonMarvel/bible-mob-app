/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootScreen from './views/RootScreen';
import store from './reducers/store';
import { Provider } from 'react-redux';

class App extends Component{ 
  render(){
    return (
        <Provider store={store}>
          <RootScreen /> 
        </Provider>
    );
  }
}; 

export default App; 
 