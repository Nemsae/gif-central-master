import { combineReducers } from 'redux';
import apiCalls from './apiCalls';
import gifImage from './gifImage';

export default combineReducers({
  apiCalls,
  gifImage,
});
