import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginForm from './components/LoginForm';
import RewardsPage from './components/RewardsPage';
import KontaktInfo from './components/KontaktInfo';
import Profile from './components/Profile';
import Search from './components/Search';
import SignUp from './components/SignUp';
// import PhoneAuth from './components/PhoneAuth';

export const NotAuthenticated = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up',
      header: null
    }
  },
  // PhoneAuth: {
  //   screen: PhoneAuth,
  //   navigationOptions: {
  //     title: 'Phone Auth',
  //     header: null
  //   }
  // }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      header: null
    },
  },
  KontaktInfo: {
    screen: KontaktInfo,
    navigationOptions: {
      title: 'KontaktInfo',
    },
  }
});

export const Authenticated = TabNavigator({
  Main: {
    screen: RewardsPage,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    }
   },
   Search: {
     screen: Search,
     navigationOptions: {
       tabBarLabel: 'Search',
       tabBarIcon: ({ tintColor }) => (
         <Icon name="search" size={35} color={tintColor} />
       )
     },
   },
   Profile: {
     screen: ProfileStack,
     navigationOptions: {
       tabBarLabel: 'Profile',
       tabBarIcon: ({ tintColor }) => (
         <Icon name="account-circle" size={35} color={tintColor} />
       )
     },
   },
}, {
  tabBarOptions: {
    activeTintColor: '#ab47bc',
  },
});
