import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';

import Profile from '../screens/Profile';
import DetailScreen from '../screens/Details';
import Upload from '../screens/UploadScreen'


const Account = createStackNavigator({
  Profile: Profile, 
})

Account.navigationOptions = { 
  tabBarLabel: 'Your Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-flower${focused ? '' : '-outline'}`
          : 'md-ios-flower'
      }
    />
  ),
 } 

 const UploadStack = createStackNavigator({
  Upload: Upload,
});

UploadStack.navigationOptions = { 
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add-circle${focused ? '' : '-outline'}`
          : 'md-ios-add-circle'
      }
    />
  ),
 } 


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  UploadStack,
  Account,
  
});
