import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RewardsReducer from './RewardsReducer';

export default combineReducers({
  auth: AuthReducer,
  rewards: RewardsReducer,
});
