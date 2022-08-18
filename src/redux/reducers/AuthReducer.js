import {LOGIN, LOGOUT, REGISTER} from '../actions/AuthActions';
import AuthInitialState from '../initialStates/AuthInitialState';

const AuthReducer = (state = AuthInitialState, {type, payload}) => {
  switch (type) {
    case LOGIN:
      return {...state, isLoggedIn: true};

    case REGISTER:
      console.log(payload);
      return {...state, isLoggedIn: true};

    case LOGOUT:
      return {...state, isLoggedIn: false};

    default:
      return state;
  }
};

export default AuthReducer;
