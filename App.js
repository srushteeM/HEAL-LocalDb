import React, { Component } from 'react'
// import { createAppContainer } from "react-navigation";
import SwitchNavigator from './navigation/SwitchNavigator'
import { NavigationContainer } from '@react-navigation/native';


export default class APP extends Component {
  render() {
    return (
      <NavigationContainer>
      <SwitchNavigator/>
      </NavigationContainer>

    )
  }
}

