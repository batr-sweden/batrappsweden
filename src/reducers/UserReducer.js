import {
  USER_FETCH_PHONE,
  USER_SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
  phoneNum: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case USER_FETCH_PHONE:
      return { ...state, phoneNum: action.payload };
    case USER_SIGN_OUT:
      return { ...state, ...INITIAL_STATE };
    default:
    return state;
  }
};
