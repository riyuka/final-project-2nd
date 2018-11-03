import React from 'react';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import Login from "../screens/Login";
import AuthLoading from "../screens/AuthLoading";
import Register from '../screens/Register';
// const AuthStack = createStackNavigator({ Login: Login });

const AuthStack = createStackNavigator({
  Register: Register,
  Login: Login, 
});


export default createSwitchNavigator({
  
  AuthLoading: AuthLoading,
  
  Auth: AuthStack,

  Main: MainTabNavigator,
},
{
  initialRouteName: "AuthLoading"
}


);