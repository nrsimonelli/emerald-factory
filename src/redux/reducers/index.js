import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import menuReducer from './menuReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  eventReducer,
  menuReducer,
  userReducer,
});

export default rootReducer;
