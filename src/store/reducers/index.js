import { combineReducers } from 'redux';
import alert from './alert_reducer';
import auth from './auth_reducer';

// import { testimonial_reducer } from "./testimonial_reducer";

export default combineReducers({
  alert,
  auth,
});
