import React, { Component } from 'react';
import MainScreen from './MainScreen';
import BookScreen from './BookScreen';
import ChapterScreen from './ChapterScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";

class RootScreen extends Component{ 
  render(){
    return (
        <MainScreen /> 
    ); 
  }
}; 

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
    Book: BookScreen,
    Chapter: ChapterScreen 
  },
  {
    InitialScreen: "Home",
    defaultNavigationOptions: {
        header: null
    }
  }
);

export default createAppContainer(AppNavigator); 
 