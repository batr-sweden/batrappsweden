import firebase from 'firebase';

import {
  USER_FETCH_PHONE,
  USER_SIGN_OUT
} from './types';

export const phoneFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Rewards/${currentUser.uid}/info`)
      .on('value', snapshot => {
        dispatch({
          type: USER_FETCH_PHONE,
          payload: snapshot.val()
        });
      });
  };
};

export const signOutUser = () => {
  firebase.auth().signOut();
  return {
    type: USER_SIGN_OUT
  };
};
