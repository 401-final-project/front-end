import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ShareScreen from '../screens/shareScreen';
import ScanScreen from '../screens/scanScreen';
import FormScreen from '../screens/formScreen';
// import ContactsScreen from '../screens/contactScreen';

const HomeStack = createStackNavigator({
  Home: ShareScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Share',
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

const ScanStack = createStackNavigator({
  Scans: ScanScreen, 
});

ScanStack.navigationOptions = {
  tabBarLabel: 'Scanner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const FormStack = createStackNavigator({
  Forms: FormScreen, 
});

FormStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const ContactsStack = createStackNavigator({
  Forms: ContactsScreen, 
});

FormStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Jared Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  ScanStack,
  FormStack,
  // ContactsStack,
  // SettingsStack,
});