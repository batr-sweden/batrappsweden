import {
  SEARCHING,
  TRENDING_STORES
} from '../actions/types';

const INITIAL_STATE = {
  trending: null,
  searchingValue: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SEARCHING:
    return { ...state, searchingValue: action.payload };
    case TRENDING_STORES:
      return { ...state, trending: action.payload };
    default:
      return state;
  }
};
