import React from 'react';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


// const AuthStack = createStackNavigator({ Login: Login });



export default createSwitchNavigator({
  

  Main: MainTabNavigator,
}


);