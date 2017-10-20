import firebase from 'firebase';

import {
  TRENDING_STORES,
  SEARCHING,
  SEARCH_STORES
} from './types';

export const searching = (text) => {
  return {
    type: SEARCHING,
    payload: text
  };
};

export const fetchTrendingStores = () => {
  return (dispatch) => {
    firebase.database().ref('/Stores')
      .on('value', snapshot => {
        dispatch({
          type: TRENDING_STORES,
          payload: snapshot.val()
        });
      });
  };
};
