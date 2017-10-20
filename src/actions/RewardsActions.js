import firebase from 'firebase';

import {
  REWARDS_FETCH_SUCCESS,
} from './types';

export const rewardsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/Rewards/${currentUser.uid}/rewards`)
      .on('value', snapshot => {
        dispatch({
          type: REWARDS_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
