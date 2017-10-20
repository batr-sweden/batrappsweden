import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RewardsReducer from './RewardsReducer';
import SearchReducer from './SearchReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  auth: AuthReducer,
  rewards: RewardsReducer,
  search: SearchReducer,
  user: UserReducer
});
