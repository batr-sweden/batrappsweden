import React from 'react';
// import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';

import LoginForm from './components/LoginForm';
import RewardsPage from './components/RewardsPage';
// import Profile from './components/Profile';

// const headerStyle = {
//   marginTop: Platform.OS === 'andriod' ? StatusBar.currentHeight : 0
// };

export const NotAuthenticated = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  // SignUp: {
  //   screen: SignUp,
  //   navigationOptions: {
  //     title: "Sign Up",
  //     headerStyle
  //   }
  // }
});

export const Authenticated = TabNavigator({
  Main: {
    screen: RewardsPage,
    navigationOptions: {
      tabBarLabel: 'Main',
      // tabBarIcon: ({ tintColor }) =>
      //   < FontAwesome name="home" size={30} color={tintColor} />
    }
   },
  // Profile: {
  //   screen: Profile,
  //   navigationOptions: {
  //     tabBarLabel: 'Profile',
  //     // tabBarIcon: ({ tintColor }) =>
  //     //   < FontAwesome name="user" size={30} color={tintColor} />
  //   }
  // }
});
