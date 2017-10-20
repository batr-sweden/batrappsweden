import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RE_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  PASSWORD_CHECK,
  ANNONIMOUS_ACTION,
  // PHONE_CHANGE,
  // PHONE_LOGIN
} from './types';

export const pageNav = () => {
  return {
    type: ANNONIMOUS_ACTION
  };
};

// export const phoneChanged = (text) => {
//   return {
//     type: PHONE_CHANGE,
//     payload: text
//   };
// };

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const rePasswordChanged = (text) => {
  return {
    type: RE_PASSWORD_CHANGED,
    payload: text
  };
};

export const passwordCheck = ({ email, password, rePassword }) => {
  if (password === rePassword) {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER_START });

      firebase.auth().createUserWithEmailAndPassword(email, rePassword)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
          console.log(error);
          loginUserFail(dispatch, error);
        });
    };
  }

  return {
    type: PASSWORD_CHECK,
    payload: 'Password not corresponding'
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        loginUserFail(dispatch, error);
      });
  };
};

// export const phoneAuthStart = (phoneNum) => {
//   return (dispatch) => {
//     dispatch({ type: LOGIN_USER_START });
//
//     firebase.auth().signInWithPhoneNumber(phoneNum)
//       .then(confirmResult => loginPhoneUserSuccess(dispatch, confirmResult))
//       .catch((error) => {
//         console.log(error);
//         loginUserFail(dispatch, error);
//       });
//   };
// };


const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
   });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

// const loginPhoneUserSuccess = (dispatch, confirmResult) => {
//   dispatch({
//     type: PHONE_LOGIN,
//     payload: confirmResult
//   });
// };
