import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { primaryColor } from './components/styles';

import LoginForm from './components/LoginForm';
import RewardsPage from './components/RewardsPage';
import KontaktInfo from './components/KontaktInfo';
import More from './components/More';
import Search from './components/Search';
import SignUp from './components/SignUp';
import QRPage from './components/QRPage';
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

export const MoreStack = StackNavigator({
  More: {
    screen: More,
    navigationOptions: {
      title: 'More',
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
      tabBarIcon: ({ tintColor }) => (
        <Icon name="loyalty" size={35} color={tintColor} />
      )
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
   QRPage: {
     screen: QRPage,
     navigationOptions: {
       tabBarLabel: 'QR',
       tabBarIcon: ({ tintColor }) => (
         <Icon name="account-box" size={35} color={tintColor} />
       )
     },
   },
   More: {
     screen: MoreStack,
     navigationOptions: {
       tabBarLabel: 'More',
       tabBarIcon: ({ tintColor }) => (
         <Icon name="more-horiz" size={35} color={tintColor} />
       )
     },
   },
}, {
  tabBarOptions: {
    activeTintColor: primaryColor,
  },
});
